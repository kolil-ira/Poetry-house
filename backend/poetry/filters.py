import django_filters
from .models import Book


class BookFilter(django_filters.FilterSet):

    min_price = django_filters.NumberFilter(
        field_name='price',
        lookup_expr='gte'
    )

    max_price = django_filters.NumberFilter(
        field_name='price',
        lookup_expr='lte'
    )
    is_available = django_filters.BooleanFilter(
    field_name='is_available'
    )

    class Meta:
        model = Book
        fields = ['min_price', 'max_price']