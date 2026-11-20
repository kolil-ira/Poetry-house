
from rest_framework import serializers
from .models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate
from poetry.models import Poem

class BaseRegistrationSerializer(serializers.ModelSerializer):

    full_name = serializers.CharField(write_only=True)

    password = serializers.CharField(
        write_only=True,
        min_length=8
    )

    class Meta:
        model = User
        fields = [
            'full_name',
            'username',
            'email',
            'password',
        ]

    def validate_email(self, value):
        if User.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError(
                "An account with this email already exists."
            )

        return value

    def create(self, validated_data):
        full_name = validated_data.pop('full_name')
        password = validated_data.pop('password')

        name_parts = full_name.strip().split(maxsplit=1)

        first_name = name_parts[0]
        last_name = name_parts[1] if len(name_parts) > 1 else ""

        user = User.objects.create_user(
            **validated_data,
            first_name=first_name,
            last_name=last_name,
            password=password,
            role=self.user_role
        )

        return user


class ReaderRegistrationSerializer(BaseRegistrationSerializer):

    user_role = User.Role.READER


class AuthorRegistrationSerializer(BaseRegistrationSerializer):

    user_role = User.Role.AUTHOR

    pen_name = serializers.CharField(max_length=100)
    bio = serializers.CharField()

    class Meta(BaseRegistrationSerializer.Meta):
        fields = BaseRegistrationSerializer.Meta.fields + [
            'pen_name',
            'bio',
        ]
class EmailLoginSerializer(TokenObtainPairSerializer):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.fields.pop('username', None)
        self.fields['email'] = serializers.EmailField()

    def validate(self, attrs):
        email = attrs['email']
        password = attrs['password']

        try:
            user_record = User.objects.get(email__iexact=email)
        except User.DoesNotExist:
            raise AuthenticationFailed('Invalid email or password.')

        user = authenticate(
            request=self.context.get('request'),
            username=user_record.username,
            password=password
        )

        if user is None:
            raise AuthenticationFailed('Invalid email or password.')

        if not user.is_active:
            raise AuthenticationFailed('This account is inactive.')

        refresh = self.get_token(user)

        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'role': user.role,
                'full_name': user.get_full_name(),
            }
        }
class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'role',
            'pen_name',
            'bio',
        ]

        read_only_fields = fields
class PublicAuthorSerializer(serializers.ModelSerializer):
    published_poems = serializers.SerializerMethodField()

    def get_published_poems(self, obj):
        poems = obj.poems.filter(status='PUBLISHED')
        return AuthorPoemSerializer(poems, many=True).data

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'pen_name',
            'bio',
            'published_poems',
        ]

class AuthorPoemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poem
        fields = [
            'id',
            'title',
            'excerpt',
            'created_at',
            'published_at',
        ]

