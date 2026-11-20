
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):

    class Role(models.TextChoices):
        READER = 'READER', 'Reader'
        AUTHOR = 'AUTHOR', 'Author'

    email = models.EmailField(unique=True)

    role = models.CharField(
        max_length=10,
        choices=Role.choices,
        default=Role.READER
    )

    pen_name = models.CharField(
        max_length=100,
        blank=True
    )

    bio = models.TextField(blank=True)

    def __str__(self):
        return f"{self.username} ({self.role})"
