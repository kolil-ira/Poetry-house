from rest_framework import generics

from .models import Order
from .serializers import OrderSerializer
from .permissions import IsReader

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