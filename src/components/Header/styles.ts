import styled from "styled-components";
import Switch from "react-switch";

export const Container = styled.div`
  height: 12rem;
  background: ${(props) => props.theme.colors.background};
  color: #fff;
  display: flex;
  flex-direction: "column";
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 30px;
  padding-bottom: 88px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;

  @media (min-width: 1440px) {
    flex-direction: "row";
    justify-content: center;
    /* border: 1px solid #fff; */
    margin: 0 88px;
    /* height: 100%; */
    height: 10vh;
  }
`;

export const Title = styled.h1`
  width: 100%;
  margin-top: 33px;
  color: ${(props) => props.theme.colors.text};

  @media (min-width: 1440px) {
    /* border: 1px solid #fff; */
  }
`;
export const SubTitle = styled.h3`
  width: 100%;
  color: ${(props) => props.theme.colors.subtext};
  font-weight: 700;

  @media (min-width: 1440px) {
    /* border: 1px solid #fff; */
    width: 80%;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  margin: 20px 0;

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const SwitchContainer = styled.div`
  width: 100vh;
  display: flex;
  /* border: 1px solid #fff; */
  @media (min-width: 1440px) {
    /* display: flex; */
    width: 0;
    margin: 0 auto;
  }
`;

export const SwitchTitle = styled.h3`
  color: ${(props) => props.theme.colors.subtext};
  font-weight: 700;
  margin: auto;

  @media (min-width: 1440px) {
    /* border: 1px solid #fff; */

    /* margin-right: 50%; */
    /* margin: 0 auto; */
    /* margin: 0; */
  }
`;

export const ButtonSwitch = styled(Switch)`
  margin: auto;
  margin-left: 50%;
  @media (min-width: 1440px) {
    /* border: 1px solid #fff; */
    /* margin: 0 auto; */
    /* margin-left: 50%; */
  }
`;
