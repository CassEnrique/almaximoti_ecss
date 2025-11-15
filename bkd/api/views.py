from rest_framework import status, viewsets
from rest_framework.response import Response

from .models import (
    CtProductTypes,
    TrProducts,
    TrSuppliers,
    VwProductWarehouse,
    VwSupplierRelationship,
)
from .serializer import (
    CtProductTypesSerializer,
    TrProductsSerializer,
    TrSuppliersSerializer,
    VwProductWarehouseSerializer,
    VwSupplierRelationshipSerializer,
)

# Create your views here.


class CtProductTypesViewSet(viewsets.ModelViewSet):
    queryset = CtProductTypes.objects.all()
    serializer_class = CtProductTypesSerializer
    http_method_names = ["get", "head", "options"]


class TrSuppliersViewSet(viewsets.ModelViewSet):
    queryset = TrSuppliers.objects.all()
    serializer_class = TrSuppliersSerializer

    def create(self, request, *args, **kwargs):
        data = request.data.copy()

        if "supplier" in data and isinstance(data["supplier"], dict):
            supplier_data = data.pop("supplier")

            for key, value in supplier_data.items():
                data[key] = value

        serializer = self.get_serializer(data=data)

        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )


class TrProductsViewSet(viewsets.ModelViewSet):
    queryset = TrProducts.objects.all()
    serializer_class = TrProductsSerializer

    def create(self, request, *args, **kwargs):
        data = request.data.copy()

        if "product" in data and isinstance(data["product"], dict):
            product_data = data.pop("product")

            for key, value in product_data.items():
                data[key] = value

        serializer = self.get_serializer(data=data)

        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )


class VwSupplierRelationshipViewSet(viewsets.ModelViewSet):
    queryset = VwSupplierRelationship.objects.all()
    serializer_class = VwSupplierRelationshipSerializer
    http_method_names = ["get", "head", "options"]


class VwProductWarehouseViewSet(viewsets.ModelViewSet):
    queryset = VwProductWarehouse.objects.all()
    serializer_class = VwProductWarehouseSerializer
    http_method_names = ["get", "head", "options"]
