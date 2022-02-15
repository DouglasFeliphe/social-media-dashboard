import React, { useContext } from "react";
// import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import {
  Container,
  Title,
  SubTitle,
  SwitchContainer,
  SwitchTitle,
  Divider,
  ButtonSwitch,
} from "./styles";
import { backgroundImages, linearGradient, shade } from "polished";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Title>Social Media Dashboard</Title>
      <SubTitle>Total Followers:23,004</SubTitle>
      <Divider />
      <SwitchContainer>
        <SwitchTitle>Dark Mode</SwitchTitle>
        <ButtonSwitch
          onChange={toggleTheme}
          checked={title === "light" ? true : false}
          checkedIcon={false}
          uncheckedIcon={false}
          // height={10}
          // width={40}
          handleDiameter={20}
          offColor={colors.toggle}
          onColor={shade(0.15, colors.toggle)}
          // onColor={backgroundImages}
        />
      </SwitchContainer>
    </Container>
  );
};

export default Header;
