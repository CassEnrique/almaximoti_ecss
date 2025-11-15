export interface TableProducts {
  key: string;
  name: string;
  code: string;
  price: number;
}

interface Product {
  name: string;
  description: string;
  fk_product_type: number;
}

interface Supplier {
  name: string;
  description: string;
}

interface Relation {
  pk_relation: number;
  price: number;
  code: string;
}

interface Warehouse {
  fk_relation: number;
  revenue: number;
}

export interface FormProducts {
  product: Product;
  supplier: Supplier;
  relation: Relation;
  warehouse: Warehouse;
  percentage: number;
}

export interface FormSupplier {
  supplier: Supplier;
  relation: Relation;
}

export interface RowPropProduct {
  pk: number;
}
