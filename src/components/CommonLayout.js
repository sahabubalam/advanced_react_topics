import { Layout } from "antd";
import AppHeader from "./AppHeader";
import SideBar from "./SideBar";
import TestComponent from "./Test";

const { Content } = Layout;

const CommonLayout = ({ children }) => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        // marginLeft: 30,
        transition: ".4s",
      }}
    >
      <SideBar />
      <Layout className="site-layout">
        <AppHeader />
        <Content
          style={{
            margin: "1em 1em 1em 2em",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default CommonLayout;
