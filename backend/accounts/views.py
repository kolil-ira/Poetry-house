from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from drf_spectacular.utils import extend_schema, extend_schema_view

from .models import User
from .serializers import (
    UserProfileSerializer,
    PublicAuthorSerializer,
    EmailLoginSerializer,
    ReaderRegistrationSerializer,
    AuthorRegistrationSerializer,
)
@extend_schema_view(
    post=extend_schema(auth=[])
)
class ReaderRegistrationView(generics.CreateAPIView):
    serializer_class = ReaderRegistrationSerializer
    permission_classes = [AllowAny] 

class ReaderRegistrationView(generics.CreateAPIView):
    serializer_class = ReaderRegistrationSerializer
    permission_classes = [AllowAny]


class AuthorRegistrationView(generics.CreateAPIView):
    serializer_class = AuthorRegistrationSerializer
    permission_classes = [AllowAny]

class EmailLoginView(TokenObtainPairView):
    serializer_class = EmailLoginSerializer

class UserProfileView(generics.RetrieveAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user

class PublicAuthorListView(generics.ListAPIView):
    serializer_class = PublicAuthorSerializer
    permission_classes = [AllowAny]
    queryset = User.objects.filter(role=User.Role.AUTHOR)


class PublicAuthorDetailView(generics.RetrieveAPIView):
    serializer_class = PublicAuthorSerializer
    permission_classes = [AllowAny]

    queryset = User.objects.filter(role=User.Role.AUTHOR)