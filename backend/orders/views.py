from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import OrderSerializer
from .permissions import IsReader
from django.db import transaction
from .models import Order, OrderItem

class OrderCreateView(generics.CreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsReader]


class OrderListView(generics.ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsReader]

    def get_queryset(self):
        return Order.objects.filter(
            reader=self.request.user
        ).order_by('-created_at')


class OrderDetailView(generics.RetrieveAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsReader]

    def get_queryset(self):
        return Order.objects.filter(
            reader=self.request.user
        )

class OrderCancelView(generics.UpdateAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsReader]

    def get_queryset(self):
        return Order.objects.filter(reader=self.request.user)

    
    @transaction.atomic
    def update(self, request, *args, **kwargs):
        order = self.get_object()

        if order.status != Order.Status.PENDING:
            return Response(
                {"detail": "Only pending orders can be cancelled."},
                status=status.HTTP_400_BAD_REQUEST
            )

        for item in order.items.select_related('book'):
            book = item.book
            book.stock += item.quantity
            book.save(update_fields=['stock'])

        order.status = Order.Status.CANCELLED
        order.save(update_fields=['status', 'updated_at'])

        return Response({
            "detail": "Order cancelled successfully.",
            "order_id": order.id,
            "status": order.status
        })
