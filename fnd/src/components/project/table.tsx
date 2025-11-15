"use client";

import React from "react";
import { Table } from "antd";

import { TableProducts } from "@/app/project/interface";
import { getAll } from "@/app/project/services";

const ProjectTableComponent = ({
  projectType,
  columnsProps,
}: {
  projectType: string;
  columnsProps: any;
}) => {
  const [data, setData] = React.useState();

  const handlerGetAll = () => {
    const res = getAll(`vw_${projectType}`);

    res.then((r) => {
      setData(r);
    });
  };

  React.useEffect(() => {
    handlerGetAll();
  }, []);

  return (
    <>
      <Table<TableProducts> columns={columnsProps()} dataSource={data} />;
    </>
  );
};

export default ProjectTableComponent;
