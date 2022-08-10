import React from "react";

import { Header } from "antd/lib/layout/layout";
import { Image } from "antd";
import logo from "../../assets/Marvel_Logo.svg";
import { styles } from "./styles";

export const CustomHeader = (): JSX.Element => {
  return (
    <Header style={styles}>
      <Image width={100} src={logo} alt="logo marvel" />
    </Header>
  );
};
