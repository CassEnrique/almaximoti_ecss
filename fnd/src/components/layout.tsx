"use client";

import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const items: MenuItem[] = [
  {
    label: (
      <a href="/home" rel="noopener noreferrer">
        <HomeOutlined />
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a href="/project" rel="noopener noreferrer">
        Proyecto
      </a>
    ),
    key: "2",
    icon: <AppstoreOutlined />,
  },
];

const LayoutComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
          className="!justify-end"
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
        />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
