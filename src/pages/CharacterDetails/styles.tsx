import styled from "styled-components";
import { device } from "../../common/breakpoints";

export const styles = {
  navigation: {
    margin: "0 10px 10px 0",
  },
};

export const Wrapper = styled.div`
  background-color: red;
  width: 100%;
  ${device.md`
       background-color: pink;
    `};
`;
