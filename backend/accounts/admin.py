from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    model = User

    list_display = (
        'username',
        'email',
        'role',
        'pen_name',
        'is_active',
        'is_staff',
    )

    list_filter = (
        'role',
        'is_active',
        'is_staff',
    )

    search_fields = (
        'username',
        'email',
        'pen_name',
    )

    ordering = ('username',)

    fieldsets = UserAdmin.fieldsets + (
        ('Additional Information', {
            'fields': ('role', 'pen_name', 'bio'),
        }),
    )

    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Additional Information', {
            'fields': ('email', 'role', 'pen_name', 'bio'),
        }),
    )