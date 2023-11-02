import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    white: {
      default: string;
      light: string;
      dark: string;
    };
    red: {
      error: string;
    };
    blue: {
      default: string;
      light: string;
    };
  }
}
