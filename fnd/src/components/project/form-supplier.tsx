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
import { FormSupplier } from "@/app/project/interface";

const { TextArea } = Input;

const ProjectFormSupplierComponent = ({ form }: { form: FormInstance }) => (
  <>
    <Form.Item<FormSupplier>
      name={["supplier", "name"]}
      rules={[{ required: true, message: "Ingresa proveedor!" }]}
    >
      <Input maxLength={32} placeholder="Proveedor" allowClear />
    </Form.Item>

    <Form.Item<FormSupplier>
      name={["supplier", "description"]}
      rules={[{ required: true, message: "Ingresa una descripcion!" }]}
    >
      <TextArea
        maxLength={256}
        placeholder="Descripción"
        allowClear
        autoSize={{ minRows: 2, maxRows: 4 }}
      />
    </Form.Item>

    <Divider>Relacion</Divider>

    <Row gutter={16}>
      <Col span={24} lg={12}>
        <Form.Item<FormSupplier>
          name={["relation", "code"]}
          rules={[
            { required: true, message: "Ingresa la clave del producto!" },
          ]}
        >
          <Input maxLength={16} placeholder="Clave del producto" allowClear />
        </Form.Item>
      </Col>

      <Col span={24} lg={12}>
        <Form.Item<FormSupplier>
          name={["relation", "price"]}
          rules={[{ required: true, message: "Ingresa el precio!" }]}
        >
          <InputNumber<number>
            max={10000}
            maxLength={10}
            className="!w-full"
            placeholder="Precio"
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
  </>
);

export default ProjectFormSupplierComponent;
