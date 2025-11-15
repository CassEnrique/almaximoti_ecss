import React from "react";
import type { PopconfirmProps } from "antd";
import { Button, message, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteRecord } from "@/app/project/services";

const ProjectConfirmComponent = ({
  projectType,
  record,
}: {
  projectType: string;
  record: any;
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    const res = deleteRecord({
      module: projectType,
      pk: projectType === "products" ? record.fk_product : record.fk_supplier,
    });

    res.then((r) => {
      messageApi.success("Registro eliminado");
    });
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    messageApi.info("No se ha borrado");
  };

  return (
    <>
      {contextHolder}
      <Popconfirm
        title="Eliminar registro"
        description="Usted esta seguro de borrar este registro?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Sí"
        cancelText="No"
      >
        <Button danger size="small">
          <DeleteOutlined />
        </Button>
      </Popconfirm>
    </>
  );
};

export default ProjectConfirmComponent;
