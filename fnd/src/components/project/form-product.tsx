import React from "react";
import {
  Col,
  Divider,
  Form,
  FormInstance,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { FormProducts } from "@/app/project/interface";
import { getAll } from "@/app/project/services";

const { TextArea } = Input;

const ProjectFormProductComponent = ({ form }: { form: FormInstance }) => {
  const [productTypes, setProductTypes] = React.useState();
  const [suppliers, setSuppliers] = React.useState();

  const handlerGetAll = () => {
    const res = getAll("vw_suppliers");

    res.then((r) => {
      setSuppliers(r);
    });
  };

  const handlerGetCtProducts = () => {
    const res = getAll("ct_product");

    res.then((r) => {
      setProductTypes(r);
    });
  };

  React.useEffect(() => {
    handlerGetAll();
    handlerGetCtProducts();
  }, []);

  return (
    <>
      <Divider>Producto</Divider>

      <Form.Item<FormProducts>
        name={["product", "name"]}
        rules={[{ required: true, message: "Ingrese producto!" }]}
      >
        <Input maxLength={32} placeholder="Producto" allowClear />
      </Form.Item>

      <Form.Item<FormProducts>
        name={["product", "description"]}
        rules={[{ required: true, message: "Ingrese descripción!" }]}
      >
        <TextArea
          maxLength={256}
          placeholder="Descripción"
          allowClear
          autoSize={{ minRows: 2, maxRows: 4 }}
        />
      </Form.Item>

      <Form.Item<FormProducts>
        name={["product", "fk_product_type"]}
        rules={[{ required: true, message: "Seleccione un tipo de producto!" }]}
      >
        <Select
          showSearch
          placeholder="Tipo de producto"
          optionFilterProp="label"
          fieldNames={{
            label: "name",
            value: "pk_product_type",
          }}
          options={productTypes}
        />
      </Form.Item>

      <Divider>Proveedor</Divider>

      <Row gutter={16}>
        <Col span={24} lg={12}>
          <Form.Item<FormProducts>
            name={["warehouse", "fk_relation"]}
            rules={[{ required: true, message: "Seleccione una clave!" }]}
          >
            <Select
              showSearch
              placeholder="Clave del producto"
              optionFilterProp="label"
              fieldNames={{
                label: "code",
                value: "pk_relation",
              }}
              options={suppliers}
              onChange={(_, c: any) => {
                form.setFieldValue(["relation", "price"], c.price);
                form.setFieldValue(["supplier", "name"], c.name);
              }}
            />
          </Form.Item>
        </Col>

        <Col span={24} lg={12}>
          <Form.Item<FormProducts> name={["relation", "price"]}>
            <InputNumber<number>
              max={10000}
              maxLength={10}
              className="!w-full"
              placeholder="Precio"
              disabled
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) =>
                value?.replace(/\$\s?|(,*)/g, "") as unknown as number
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item<FormProducts> name={["supplier", "name"]}>
        <Input maxLength={16} placeholder="Proveedor" disabled />
      </Form.Item>

      <Divider>Ganancia</Divider>

      <Row gutter={16}>
        <Col span={6}>
          <Form.Item<FormProducts>
            name={"percentage"}
            rules={[
              { required: true, message: "Ingrese una ganancia!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || value > 0) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Incorrecto!"));
                },
              }),
            ]}
          >
            <InputNumber<number>
              max={100}
              min={0.1}
              maxLength={6}
              className="!w-full"
              placeholder="Precio"
              formatter={(value) => `${value}%`}
              parser={(value) => value?.replace("%", "") as unknown as number}
              onChange={(v) => {
                if (!form.getFieldValue(["relation", "price"])) return;
                form.setFieldValue(
                  ["warehouse", "revenue"],
                  (
                    (v / 100 + 1) *
                    form.getFieldValue(["relation", "price"])
                  ).toFixed(2),
                );
              }}
            />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item<FormProducts> name={["warehouse", "revenue"]}>
            <InputNumber<number>
              max={100}
              min={0.1}
              maxLength={15}
              className="!w-full"
              placeholder="Precio"
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) =>
                value?.replace(/\$\s?|(,*)/g, "") as unknown as number
              }
              disabled
            />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default ProjectFormProductComponent;
