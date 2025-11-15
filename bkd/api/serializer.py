from rest_framework import serializers

from .models import (
    CtProductTypes,
    TrProducts,
    TrRelations,
    TrSuppliers,
    TrWarehouses,
    VwProductWarehouse,
    VwSupplierRelationship,
)


class CtProductTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CtProductTypes
        fields = "__all__"


class TrRelationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrRelations
        fields = "__all__"


class TrSuppliersSerializer(serializers.ModelSerializer):
    relation = serializers.JSONField(write_only=True)

    class Meta:
        model = TrSuppliers
        fields = "__all__"

    def create(self, validated_data):
        relation_data = validated_data.pop("relation")
        supplier = TrSuppliers.objects.create(**validated_data)

        supplier_pk_value = supplier.pk
        relation_data["fk_supplier"] = supplier_pk_value

        TrRelations.objects.create(**relation_data)
        return supplier

    def update(self, instance, validated_data):
        relation_data = validated_data.pop("relation", None)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        if relation_data:
            try:
                relation_instance = TrRelations.objects.get(fk_supplier=instance.pk)
            except ObjectDoesNotExist:
                relation_data["fk_supplier"] = instance.pk
                TrRelations.objects.create(**relation_data)
                return instance

            for attr, value in relation_data.items():
                if attr != "fk_supplier":
                    setattr(relation_instance, attr, value)

            relation_instance.save()

        return instance


class TrProductsSerializer(serializers.ModelSerializer):
    warehouse = serializers.JSONField(write_only=True)

    class Meta:
        model = TrProducts
        fields = "__all__"

    def create(self, validated_data):
        warehouse_data = validated_data.pop("warehouse")
        product = TrProducts.objects.create(**validated_data)

        product_pk_value = product.pk
        warehouse_data["fk_product"] = product_pk_value

        TrWarehouses.objects.create(**warehouse_data)
        return product

    def update(self, instance, validated_data):
        warehouse_data = validated_data.pop("warehouse", None)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        if warehouse_data:
            try:
                warehouse_instance = TrWarehouses.objects.get(fk_product=instance.pk)
            except ObjectDoesNotExist:
                warehouse_data["fk_product"] = instance.pk
                TrWarehouses.objects.create(**warehouse_data)
                return instance

            for attr, value in warehouse_data.items():
                if attr != "fk_product":
                    setattr(warehouse_instance, attr, value)

            warehouse_instance.save()

        return instance


class VwSupplierRelationshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = VwSupplierRelationship
        fields = "__all__"


class VwProductWarehouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = VwProductWarehouse
        fields = "__all__"
