import React from "react";
import { Layout as Theme } from "antd";

import { Outlet } from "react-router-dom";
import { CustomHeader } from "../../components/CustomHeader";
import { styles } from "./styles";

const { Content } = Theme;

const Layout = (): JSX.Element => {
  return (
    <>
      <Theme>
        <CustomHeader />
        <Content style={styles.content}>
          <Outlet />
        </Content>
      </Theme>
    </>
  );
};

export default Layout;
