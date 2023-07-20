import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, Space } from "antd";
import React from "react";

const AppHeader = () => {
  
  return (
    <Layout.Header
      className="site-layout-background"
      style={{
        color: "#ffffff",
        backgroundColor: "#391B52",
        fontSize: "20px",
        position: "sticky",
        top: 0,
        zIndex: 9999999,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height:"45px"
      }}
    >
    </Layout.Header>
  );
};

export default AppHeader;
