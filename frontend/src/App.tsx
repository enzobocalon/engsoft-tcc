import { ThemeProvider } from 'styled-components';
import theme from './assets/styles/theme';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { Router } from './router';
import { AuthProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { DocumentProvider } from './context/DocumentContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <DocumentProvider>
            <Router />
          </DocumentProvider>
        </AuthProvider>
        <Toaster />
      </QueryClientProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
