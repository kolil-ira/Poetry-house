from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsAuthorOrReadOnly(BasePermission):

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True

        return (
            request.user
            and request.user.is_authenticated
            and request.user.role == 'AUTHOR'
        )

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return (
                obj.status == 'PUBLISHED'
                or (
                    request.user.is_authenticated
                    and obj.author == request.user
                )
            )

        return obj.author == request.user


class IsBookOwnerOrReadOnly(BasePermission):

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True

        return (
            request.user
            and request.user.is_authenticated
            and request.user.role == 'AUTHOR'
        )

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return (
                obj.is_available
                or (
                    request.user.is_authenticated
                    and obj.author == request.user
                )
            )

        return obj.author == request.user