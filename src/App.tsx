import Card from "./components/Card";
import { ThemeProvider, DefaultTheme } from "styled-components";
import useStorageState from "./hooks/useStorageState";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { CardContainer, NextSectionTitle } from "./AppStyles";

function App() {
  const [theme, setTheme] = useStorageState<DefaultTheme>("theme", light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <CardContainer>
          <Card
            variant="primary"
            user="@realnathanf"
            count="1987"
            subtext="FOLLOWERS"
            percentage={1256}
            icon="youtube"
          />
          <Card
            variant="primary"
            user="@nathanf"
            count="1044"
            subtext="FOLLOWERS"
            percentage={2257}
            icon="facebook"
          />
          <Card
            variant="primary"
            user="@realnathanf"
            count="11K"
            subtext="SUBSCRIBERS"
            percentage={99}
            icon="facebook"
          />
          <Card
            variant="primary"
            user="@nathanf"
            count="8239"
            subtext="FOLLOWERS"
            percentage={99}
            icon="youtube"
          />
          {/* <Title>Social Media Dashboard</Title> */}
          <NextSectionTitle>Overview - Today</NextSectionTitle>
          <Card
            variant="secondary"
            count="8239"
            subtext="FOLLOWERS"
            percentage={2257}
            icon="instagram"
          />
          <Card
            variant="secondary"
            count="144"
            subtext="FOLLOWERS"
            percentage={1145}
            icon="youtube"
          />
          <Card
            variant="secondary"
            count="8239"
            subtext="SUBSCRIBERS"
            percentage={99}
            icon="instagram"
          />
          <Card
            variant="secondary"
            count="1044"
            subtext="FOLLOWERS"
            percentage={1145}
            icon="twitter"
          />
          <Card
            variant="secondary"
            count="1044"
            subtext="FOLLOWERS"
            percentage={1145}
            icon="twitter"
          />
          <Card
            variant="secondary"
            count="144"
            subtext="FOLLOWERS"
            percentage={1145}
            icon="youtube"
          />
          <Card
            variant="secondary"
            count="8239"
            subtext="SUBSCRIBERS"
            percentage={99}
            icon="instagram"
          />
          <Card
            variant="secondary"
            count="1044"
            subtext="FOLLOWERS"
            percentage={1145}
            icon="twitter"
          />
        </CardContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
