from django.db.models import Q
from django.utils import timezone
from .filters import BookFilter
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Poem, Category ,Book
from .serializers import PoemSerializer, CategorySerializer,BookSerializer
from .permissions import IsAuthorOrReadOnly ,IsBookOwnerOrReadOnly


class PoemViewSet(viewsets.ModelViewSet):
    serializer_class = PoemSerializer
    permission_classes = [AllowAny, IsAuthorOrReadOnly]
    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter,
    ]

    search_fields = [
        'title',
        'content',
        'author__username',
    ]

    filterset_fields = [
        'category',
        'status',
    ]

    ordering_fields = [
        'created_at',
        'published_at',
        'title',
    ]

    ordering = ['-created_at']

    def get_queryset(self):
        user = self.request.user

        if user.is_authenticated and user.role == 'AUTHOR':
            return Poem.objects.filter(
                Q(status=Poem.Status.PUBLISHED) |
                Q(author=user)
            ).distinct()

        return Poem.objects.filter(
            status=Poem.Status.PUBLISHED
        )

    def perform_create(self, serializer):
        if serializer.validated_data.get('status') == Poem.Status.PUBLISHED:
            serializer.save(
                author=self.request.user,
                published_at=timezone.now()
            )
        else:
            serializer.save(author=self.request.user)

    def perform_update(self, serializer):
        poem = self.get_object()

        new_status = serializer.validated_data.get(
            'status',
             poem.status
    )

        if (
            poem.status != Poem.Status.PUBLISHED
            and new_status == Poem.Status.PUBLISHED
        ):
            serializer.save(published_at=timezone.now())
        else:
            serializer.save()



class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]


class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    permission_classes = [AllowAny, IsBookOwnerOrReadOnly]
    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter,
    ]

    search_fields = [
        'title',
        'description',
        'author__username',
    ]
    
    filterset_class = BookFilter

    ordering_fields = [
        'price',
        'created_at',
        'title',
    ]

    ordering = ['-created_at']

    def get_queryset(self):
        user = self.request.user

        if user.is_authenticated and user.role == 'AUTHOR':
            return Book.objects.filter(
                Q(is_available=True) |
                Q(author=user)
            ).distinct()

        return Book.objects.filter(is_available=True)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)