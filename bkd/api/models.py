from django.db import models

# Create your models here.


class CtProductTypes(models.Model):
    pk_product_type = models.AutoField(primary_key=True)
    name = models.TextField(blank=True, null=True)
    key = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True, blank=True, null=True)

    class Meta:
        managed = False
        db_table = "ct_product_types"


class TrProducts(models.Model):
    pk_product = models.AutoField(primary_key=True)
    name = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    fk_product_type = models.IntegerField(blank=True, null=True)
    is_active = models.BooleanField(default=True, blank=True, null=True)

    class Meta:
        managed = False
        db_table = "tr_products"


class TrRelations(models.Model):
    pk_relation = models.AutoField(primary_key=True)
    code = models.TextField(blank=True, null=True)
    price = models.DecimalField(
        max_digits=65535, decimal_places=2, blank=True, null=True
    )
    fk_supplier = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = "tr_relations"


class TrSuppliers(models.Model):
    pk_supplier = models.AutoField(primary_key=True)
    name = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True, blank=True, null=True)

    class Meta:
        managed = False
        db_table = "tr_suppliers"


class TrWarehouses(models.Model):
    pk_warehouse = models.AutoField(primary_key=True)
    revenue = models.DecimalField(
        max_digits=65535, decimal_places=2, blank=True, null=True
    )
    fk_relation = models.IntegerField(blank=True, null=True)
    fk_product = models.IntegerField(blank=True, null=True)
    is_active = models.BooleanField(default=True, blank=True, null=True)

    class Meta:
        managed = False
        db_table = "tr_warehouses"


class VwSupplierRelationship(models.Model):
    pk_relation = models.AutoField(primary_key=True)
    key = models.TextField(blank=True, null=True)
    code = models.TextField(blank=True, null=True)
    price = models.DecimalField(
        max_digits=65535, decimal_places=2, blank=True, null=True
    )
    fk_supplier = models.IntegerField(blank=True, null=True)
    name = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = "vw_supplier_relationship"


class VwProductWarehouse(models.Model):
    pk_warehouse = models.AutoField(primary_key=True)
    key = models.TextField(blank=True, null=True)
    revenue = models.DecimalField(
        max_digits=65535, decimal_places=2, blank=True, null=True
    )
    fk_product = models.IntegerField(blank=True, null=True)
    fk_relation = models.IntegerField(blank=True, null=True)
    name = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    fk_product_type = models.IntegerField(blank=True, null=True)
    code = models.TextField(blank=True, null=True)
    price = models.DecimalField(
        max_digits=65535, decimal_places=2, blank=True, null=True
    )

    class Meta:
        managed = False
        db_table = "vw_product_warehouse"
