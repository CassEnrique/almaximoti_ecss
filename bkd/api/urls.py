from django.urls import include, path
from rest_framework import routers, urlpatterns

from api import views

router = routers.DefaultRouter()

router.register(r"ct_product", views.CtProductTypesViewSet)

router.register(r"suppliers", views.TrSuppliersViewSet)
router.register(r"products", views.TrProductsViewSet)

router.register(r"vw_suppliers", views.VwSupplierRelationshipViewSet)
router.register(r"vw_products", views.VwProductWarehouseViewSet)

urlpatterns = [path("", include(router.urls))]
