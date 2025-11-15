"use client";

import React from "react";
import { Tabs, TabsProps } from "antd";
import ProjectTableComponent from "./table";
import ProjectModalComponent from "./modal";
import { columnsTableProducts, columnsTableSuppliers } from "./props";

const ProjectTabsComponent = () => {
  const [tabSelected, setTabSelected] = React.useState("2");

  const onChange = (key: string) => {
    setTabSelected(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Productos / Stock",
      children: (
        <>
          <ProjectTableComponent
            projectType={"products"}
            columnsProps={columnsTableProducts}
          />
          <ProjectModalComponent projectType={"products"} createEdit={false} />
        </>
      ),
    },
    {
      key: "2",
      label: "Proveedores",
      children: (
        <>
          <ProjectTableComponent
            projectType={"suppliers"}
            columnsProps={columnsTableSuppliers}
          />
          <ProjectModalComponent projectType={"suppliers"} createEdit={false} />
        </>
      ),
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey={tabSelected} items={items} onChange={onChange} />
    </>
  );
};

export default ProjectTabsComponent;
