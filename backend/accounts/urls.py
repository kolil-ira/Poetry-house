from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import (
    ReaderRegistrationView,
    AuthorRegistrationView,
    EmailLoginView,
    UserProfileView,
    PublicAuthorListView,
    PublicAuthorDetailView,
)

urlpatterns = [
    path("register/reader/", ReaderRegistrationView.as_view(), name="reader-register"),
    path("register/author/", AuthorRegistrationView.as_view(), name="author-register"),
    path("login/", EmailLoginView.as_view(), name="login"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path("profile/", UserProfileView.as_view(), name="user-profile"),
    path("authors/", PublicAuthorListView.as_view(), name="author-list"),
    path("authors/<int:pk>/", PublicAuthorDetailView.as_view(), name="author-detail"),
]
