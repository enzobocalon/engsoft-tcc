import { ThemeProvider } from 'styled-components';
import theme from './assets/styles/theme';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { Router } from './router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
