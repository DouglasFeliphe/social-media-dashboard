import styled from "styled-components";
import Switch from "react-switch";

export const Container = styled.div`
  height: 10rem;
  /* height: 250%; */
  /* height: 100px; */
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  flex-direction: "column";
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 30px;
`;

export const Title = styled.h1`
  width: 100%;
  color: ${(props) => props.theme.colors.text};
`;
export const SubTitle = styled.h3`
  width: 100%;
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;
`;

export const Divider = styled.hr`
  width: 100%;
  /* margin: 20px 0; */
`;

export const SwitchContainer = styled.div`
  width: 100vh;
  display: flex;
  padding: 11px;
  /* border: 1px solid #000; */
`;

export const SwitchTitle = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;
  margin: auto;
`;

export const ButtonSwitch = styled(Switch)`
  /* border: 1px solid #000; */
  margin: auto;
`;
