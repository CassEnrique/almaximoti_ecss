"use client";

import React from "react";
import { Button, FloatButton, Form, Modal } from "antd";
import { FormProducts, FormSupplier } from "@/app/project/interface";
import { EditOutlined } from "@ant-design/icons";
import ProjectFormProductComponent from "./form-product";
import ProjectFormSupplierComponent from "./form-supplier";
import { createRecord, getPk, putRecord } from "@/app/project/services";

const ProjectModalComponent = ({
  createEdit,
  record,
  projectType,
}: {
  createEdit: boolean;
  record?: any;
  projectType: string;
}) => {
  const [productForm] = Form.useForm();
  const [open, setOpen] = React.useState(false);

  const handlerPutSupplier = (values: FormProducts | FormSupplier) => {
    const { supplier, relation } = values;
    return {
      supplier: { ...supplier, pk_supplier: record.fk_supplier },
      relation: { ...relation, pk_relation: record.pk_relation },
    };
  };

  const handlerPutProduct = (values: FormProducts | FormSupplier) => {
    const { product, warehouse } = values;
    return {
      product: { ...product, pk_product: record.fk_product },
      warehouse: { ...warehouse, pk_warehouse: record.pk_warehouse },
    };
  };

  const onFinish = (values: FormProducts | FormSupplier) => {
    const res = createEdit
      ? putRecord(
          projectType,
          projectType === "products" ? record.fk_product : record.fk_supplier,
          projectType === "products"
            ? handlerPutProduct(values)
            : handlerPutSupplier(values),
        )
      : createRecord(projectType, values);

    res.then((r) => {
      console.log(r);
    });

    setOpen(false);
  };

  const handlerGetInfo = () => {
    if (!record) return;
    const res = getPk(
      `vw_${projectType}`,
      projectType === "products" ? record.fk_product : record.fk_supplier,
    );

    res.then((r) => {
      if (projectType === "products") {
        const data = {
          product: { ...r },
          warehouse: { ...r },
          relation: { ...r },
          percentage: (parseFloat(r.revenue) / parseFloat(r.price) - 1) * 100,
        };
        productForm.setFieldsValue(data);
      }

      if (projectType === "suppliers") {
        const data = {
          supplier: { ...r },
          relation: { ...r },
        };
        productForm.setFieldsValue(data);
      }
    });
  };

  return (
    <>
      {createEdit ? (
        <>
          <Button size="small" onClick={() => setOpen(true)}>
            <EditOutlined />
          </Button>
        </>
      ) : (
        <>
          <FloatButton
            type="primary"
            style={{ insetInlineEnd: 16 }}
            onClick={() => setOpen(true)}
          />
        </>
      )}

      <Modal
        open={open}
        title="Crear nuevo registro"
        okText="Crear"
        cancelText="Cancelar"
        okButtonProps={{ autoFocus: true, htmlType: "submit" }}
        onCancel={() => setOpen(false)}
        destroyOnHidden
        mask
        keyboard={false}
        maskClosable={false}
        afterOpenChange={handlerGetInfo}
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={productForm}
            name="form-project"
            initialValues={{ modifier: "public" }}
            clearOnDestroy
            onFinish={(values) => onFinish(values)}
          >
            {dom}
          </Form>
        )}
      >
        {projectType === "products" ? (
          <>
            <ProjectFormProductComponent form={productForm} />
          </>
        ) : (
          <>
            <ProjectFormSupplierComponent form={productForm} />
          </>
        )}
      </Modal>
    </>
  );
};

export default ProjectModalComponent;
