import styled from "styled-components";
import { device } from "constants/Constants";

export const Page = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media ${device.mobile} {
    width: 480px;
  }
  @media ${device.tablet} {
    width: 700px;
    padding-left: 36px;
    padding-right: 36px;
  }
  @media ${device.desktop} {
    width: 1050px;
    padding-left: 115px;
    padding-right: 115px;
  }
`

export const Section = styled.div`
  padding: 50px 0px;
`