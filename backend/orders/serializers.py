from rest_framework import serializers
from django.db import transaction
from poetry.models import Book
from .models import Order, OrderItem


class OrderItemSerializer(serializers.ModelSerializer):

    book_title = serializers.CharField(
        source='book.title',
        read_only=True
    ) 
    quantity = serializers.IntegerField(
    min_value=1
)

    class Meta:
        model = OrderItem
        fields = [
            'id',
            'book',
            'book_title',
            'quantity',
            'price',
        ]
        read_only_fields = ['id', 'price']


class OrderSerializer(serializers.ModelSerializer):

    items = OrderItemSerializer(
    many=True,
    allow_empty=False
     )

    class Meta:
        model = Order
        fields = [
            'id',
            'full_name',
            'email',
            'phone',
            'delivery_address',
            'status',
            'total_amount',
            'items',
            'created_at',
        ]

        read_only_fields = [
            'id',
            'status',
            'total_amount',
            'created_at',
        ]

    @transaction.atomic
    def create(self, validated_data):

        items_data = validated_data.pop('items')

        order = Order.objects.create(
            reader=self.context['request'].user,
            **validated_data
        )

        total = 0

        for item_data in items_data:

            book = Book.objects.select_for_update().get(
                id=item_data['book'].id
            )

            quantity = item_data['quantity']

            if not book.is_available:
                raise serializers.ValidationError(
                    f"{book.title} is unavailable."
                )

            if quantity <= 0 or quantity > book.stock:
                raise serializers.ValidationError(
                    f"Invalid quantity for {book.title}."
                )

            item_price = book.price

            OrderItem.objects.create(
                order=order,
                book=book,
                quantity=quantity,
                price=item_price
            )

            total += item_price * quantity

            book.stock -= quantity
            book.save(update_fields=['stock'])

        order.total_amount = total
        order.save(update_fields=['total_amount'])

        return order