import styled from "styled-components";
import { device } from "../../common/breakpoints";

export const styles = {
  navigation: {
    margin: "0 10px 10px 0",
  },
};

export const Wrapper = styled.div`
  img {
    width: 100%;
    padding: 20px;
  }
  ${device.laptop`
       img {
        object-fit: cover;
        width: 750px;
       }
    `};
  ${device.laptopL`
       img {
        object-fit: cover;
        width: 750px;
       }
    `};
  ${device.desktop`
       img {
        object-fit: cover;
        width: 750px;
       }
    `};
`;
