
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .serializers import UserProfileSerializer
from .models import User
from .serializers import PublicAuthorSerializer
from .serializers import EmailLoginSerializer
from .serializers import (
    ReaderRegistrationSerializer,
    AuthorRegistrationSerializer,
)


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