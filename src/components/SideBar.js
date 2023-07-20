import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu ,Layout} from "antd";
import { useNavigate } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const { Sider } = Layout;
const SideBar = () => {
  const navigate = useNavigate();

  const [menus] = useState([
    {
      key: "",
      icon: <i className="fas fa-home" />,
      label: "Home",
    },
    {
      key: "pdf",
      icon: <i className="fas fa-users" />,
      label: "Multiple Page Pdf",
    },
    {
      key: "test",
      icon: <i className="fas fa-users" />,
      label: "Dynamic Input Field",
    },
    {
      key: "checkbox-practice",
      icon: <i className="fas fa-archive" />,
      label: "Multiple checkbox",
    },
    {
      key: "transfer",
      icon: <i className="fas fa-archive" />,
      label: "Transfer",
    },
    {
      key: "editable",
      icon: <i className="fas fa-archive" />,
      label: "Editable Table",
    },
    {
      key: "invoiceButton",
      icon: <i className="fas fa-archive" />,
      label: "Invoice Pdf",
    },
    {
      key: "test-form",
      icon: <i className="fas fa-archive" />,
      label: "Multiple Input Form",
    },
    {
      key: "dynamic-field",
      icon: <i className="fas fa-archive" />,
      label: "Dynamic Input Field",
    },
    {
      key: "input-auto-select",
      icon: <i className="fas fa-archive" />,
      label: "Dynamic Input And Auto Select Unuseable Dropdown Value",
    },
    {
      key: "debounce-select",
      icon: <i className="fas fa-archive" />,
      label: "Debounce Searchable Dropdown",
    },
    {
      key: "export-xlsx",
      icon: <i className="fas fa-archive" />,
      label: "Export xlsx With Api Data",
    },
  ]);

  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        transition: '.4s',
        marginTop:45
      }}
      width={210}
      trigger={null}
      collapsible
      theme="light"
    >
      <Menu
        onClick={(value) => {
          const { key } = value;
          navigate(`/${key}`);
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        items={menus}
      />
   </Sider>
  );
};

export default SideBar;
