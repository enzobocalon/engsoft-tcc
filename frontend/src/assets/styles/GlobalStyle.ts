import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

  body {
    min-height: 100vh;
    min-width: 100vw;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.white.dark};
  }
`;
