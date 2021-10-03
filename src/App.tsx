import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AccountProvider } from './hooks/useAccount';
import { MetricsProvider } from './hooks/useMetrics';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <MetricsProvider>
        <AccountProvider>
          <Routes />
          <GlobalStyle />
        </AccountProvider>
      </MetricsProvider>
    </BrowserRouter>
  );
}

export default App;
