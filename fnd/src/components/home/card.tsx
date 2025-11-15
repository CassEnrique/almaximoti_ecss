"use client";

import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  GithubOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

const HomeCardComponent = () => {
  return (
    <div className="App">
      <Card
        style={{ width: 300 }}
        cover={
          <img
            draggable={false}
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <a
            key="code"
            href="https://github.com/CassEnrique/almaximoti_ecss"
            target="_blank"
          >
            <GithubOutlined />
          </a>,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          }
          title="Cass Herrera Edgar Enrique"
          description="Ingeniero en Mecatrónica, apasionado por la programación y entusiasta por el código libre."
        />
      </Card>
    </div>
  );
};

export default HomeCardComponent;
