import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import { GlobalStyle } from "./assets/styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
