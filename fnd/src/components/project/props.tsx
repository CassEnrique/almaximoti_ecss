import { Space } from "antd";
import ProjectModalComponent from "./modal";
import ProjectConfirmComponent from "./confirm";
import { RowPropProduct, TableProducts } from "@/app/project/interface";

const genericsColumns = (projectType: string) => [
  {
    title: "Clave Producto",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Precio",
    dataIndex: projectType === "products" ? "revenue" : "price",
    key: "price",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <ProjectModalComponent
          projectType={projectType}
          record={record}
          createEdit={true}
        />
        <ProjectConfirmComponent projectType={projectType} record={record} />
      </Space>
    ),
  },
];

export const columnsTableProducts: TableProps<TableProducts>["columns"] = (
  props: RowPropProduct,
) => [
  {
    title: "Producto",
    dataIndex: "name",
    key: "name",
  },
  ...genericsColumns("products"),
];

export const columnsTableSuppliers: TableProps<TableProducts>["columns"] = (
  props: RowPropProduct,
) => [
  {
    title: "Proveedor",
    dataIndex: "name",
    key: "name",
  },
  ...genericsColumns("suppliers"),
];
