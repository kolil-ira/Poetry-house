from rest_framework.routers import DefaultRouter
from .views import PoemViewSet, CategoryViewSet ,BookViewSet

router = DefaultRouter()

router.register('poems', PoemViewSet, basename='poem')
router.register('categories', CategoryViewSet, basename='category')
router.register('books', BookViewSet, basename='book')
urlpatterns = router.urls
