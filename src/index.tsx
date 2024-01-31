import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import BaseStyles from './styles/BasicStyles';
import theme from './styles/theme';

import App from './App';
import GlobalContext from './contexts/GlobalContext';
import ModalContext from './contexts/ModalContext';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);

  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 0, refetchOnWindowFocus: false } },
    queryCache: new QueryCache({
      onError: (err) => {
		const error = err as Error;
        const msg = error.message;
        console.error('[useQuery] global err:\n', msg, err);
      },
    }),
  });

  root.render(
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalContext>
              <ModalContext>
                <CssBaseline />
                <BaseStyles />
                <App />
              </ModalContext>
            </GlobalContext>
          </ThemeProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error("Root element with ID 'root' not found.");
}
