import Card from "./components/Card";
import { ThemeProvider, DefaultTheme } from "styled-components";
import useStorageState from "./hooks/useStorageState";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

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
        <Card />
        <Card />
        <Card />
      </ThemeProvider>
    </div>
  );
}

export default App;
