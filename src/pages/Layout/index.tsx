import React from "react";
import { Layout as Theme } from "antd";

import { Outlet } from "react-router-dom";
import { CustomHeader } from "../../components/CustomHeader";

const { Content } = Theme;

const Layout = (): JSX.Element => {
  return (
    <>
      <Theme>
        <CustomHeader />
        <Content style={{ margin: "40px" }}>
          <Outlet />
        </Content>
      </Theme>
    </>
  );
};

export default Layout;
