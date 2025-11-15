
drop view if exists vw_supplier_relationship;
drop view if exists vw_product_warehouse;

drop table if exists ct_product_types;
drop table if exists tr_relations;
drop table if exists tr_warehouses;
drop table if exists tr_suppliers;
drop table if exists tr_products;

create table if not exists ct_product_types(
    pk_product_type serial primary key,
    name text,
    key text,
    is_active boolean default true
);

insert into ct_product_types (name, key)
values ('Limpieza', 'lpz'),
       ('Salud', 'sld'),
       ('Aseo', 'aso'),
       ('Belleza', 'blz'),
       ('Carnes', 'crs'),
       ('Lacteos', 'lcs')
;

create table if not exists tr_suppliers(
    pk_supplier serial primary key,
    name text,
    description text,
    is_active boolean default true
);

create table if not exists tr_products(
    pk_product serial primary key,
    name text,
    description text,
    fk_product_type int4,
    is_active boolean default true
);

create table if not exists tr_relations(
    pk_relation serial primary key,
    code text,
    price decimal,
    fk_supplier int4 REFERENCES tr_suppliers(pk_supplier) ON DELETE CASCADE
);

create table if not exists tr_warehouses(
    pk_warehouse serial primary key,
    revenue decimal,
    fk_relation int4,
    fk_product int4 REFERENCES tr_products(pk_product) ON DELETE CASCADE,
    is_active boolean default true
);


create or replace view vw_supplier_relationship as
select concat_ws('-', tr.pk_relation, tr.fk_supplier, tr.code) as key
     , tr.pk_relation
     , tr.code
     , tr.price
     , tr.fk_supplier
     , ts.name
     , ts.description
from tr_relations tr
join tr_suppliers ts on tr.fk_supplier = ts.pk_supplier
;


create or replace view vw_product_warehouse as
select concat_ws('-', tw.pk_warehouse, tw.fk_product, tw.fk_relation, tr.code) as key
     , tw.pk_warehouse
     , tw.revenue
     , tw.fk_product
     , tw.fk_relation
     , tp.name
     , tp.description
     , tp.fk_product_type
     , tr.code
     , tr.price
from tr_warehouses tw
join tr_products tp on tw.fk_product = tp.pk_product
join tr_relations tr on tw.fk_relation = tr.pk_relation
;
