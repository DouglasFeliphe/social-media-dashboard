import styled from "styled-components";
import { Title } from "./components/Header/styles";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 25%;

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    position: initial;
    /* max-width: 1100px; */
  }
`;

export const NextSectionTitle = styled(Title)`
  width: fit-content;
  margin: 0 44px;

  @media (min-width: 1440px) {
    display: flex;
    /* justify-content: center; */
    width: 85%;
    margin: 0;
    margin-top: 33px;
  }
`;
