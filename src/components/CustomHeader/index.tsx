import React from "react";

import { Header } from "antd/lib/layout/layout";
import image from "../../assets/Marvel_Logo.svg";

export const CustomHeader = (): JSX.Element => {
  return (
    <Header>
      logo
      {/*       <div style={{ display: "flex", alignItems: "center" }}>
        <img src={image} alt="logo marvel" width="300" />
      </div> */}
    </Header>
  );
};
