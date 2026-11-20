from django.contrib import admin
from .models import Category, Poem ,Book


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)


@admin.register(Poem)
class PoemAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'author',
        'category',
        'status',
        'created_at',
    )

    list_filter = (
        'status',
        'category',
        'created_at',
    )

    search_fields = (
        'title',
        'content',
        'author__username',
    )

    date_hierarchy = 'created_at'

    readonly_fields = ('created_at', 'updated_at')

    ordering = ('-created_at',)

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'author',
        'price',
        'stock',
        'is_available',
        'created_at',
    )

    list_filter = ('is_available', 'created_at')

    search_fields = ('title', 'author__username')

    readonly_fields = ('created_at', 'updated_at')

    ordering = ('-created_at',)