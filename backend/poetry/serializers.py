from rest_framework import serializers
from .models import Poem, Category , Book
from decimal import Decimal

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'id',
            'name',
            'description',
        ]


class PoemSerializer(serializers.ModelSerializer):

    author_name = serializers.CharField(
        source='author.username',
        read_only=True
    )
   

    category_name = serializers.CharField(
        source='category.name',
        read_only=True
    )

    class Meta:
        model = Poem
        fields = [
            'id',
            'title',
            'author',
            'author_name',
            'category',
            'category_name',
            'excerpt',
            'content',
            'status',
            'created_at',
            'updated_at',
            'published_at',
        ]

        read_only_fields = [
            'id',
            'author',
            'created_at',
            'updated_at',
            'published_at',
        ]

class BookSerializer(serializers.ModelSerializer):
   
    author_name = serializers.CharField(
        source='author.username',
        read_only=True
    )

    price = serializers.DecimalField(
        max_digits=10,
        decimal_places=2,
        min_value=Decimal('0.01')
    )
    stock = serializers.IntegerField(
    min_value=0
)


    class Meta:
        model = Book
        fields = [
            'id',
            'title',
            'description',
            'author',
            'author_name',
            'price',
            'stock',
            'is_available',
            'created_at',
            'updated_at',
        ]

        read_only_fields = [
            'id',
            'author',
            'created_at',
            'updated_at',
        ]