from django.contrib import admin
from .models import Order, OrderItem
from django.core.exceptions import ValidationError
from .forms import OrderAdminForm
class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'reader',
        'full_name',
        'total_amount',
        'status',
        'created_at',
    )
    form = OrderAdminForm

    list_filter = ('status', 'created_at')

    search_fields = (
        'reader__username',
        'full_name',
        'email',
    )

    readonly_fields = (
        'total_amount',
        'created_at',
        'updated_at',
    )

    inlines = [OrderItemInline]


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'book', 'quantity', 'price')