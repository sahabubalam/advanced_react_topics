import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, Space } from "antd";
import React from "react";

const AppHeader = () => {
  
  return (
    <Layout.Header
      className="site-layout-background"
      style={{
        color: "#ffffff",
        backgroundColor: "#36454F",
        fontSize: "20px",
        position: "sticky",
        top: 0,
        zIndex: 9999999,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height:"65px"
      }}
    >
      <div style={{ alignItems:'center' }}>
        <p style={{ alignItems:'center' }}>Practice Project</p>
      </div>
    </Layout.Header>
  );
};

export default AppHeader;
