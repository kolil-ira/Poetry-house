
from django import forms
from .models import Order


class OrderAdminForm(forms.ModelForm):

    class Meta:
        model = Order
        fields = '__all__'

    def clean(self):
        cleaned_data = super().clean()

        new_status = cleaned_data.get('status')

        if self.instance.pk and new_status:
            old_order = Order.objects.get(pk=self.instance.pk)
            old_status = old_order.status

            if old_status != new_status:
                if not Order.is_valid_status_transition(
                    old_status,
                    new_status
                ):
                    self.add_error(
                        'status',
                        f'Invalid status transition: {old_status} to {new_status}.'
                    )

        return cleaned_data
