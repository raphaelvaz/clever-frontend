import React from 'react';
import { AccountProvider } from './hooks/useAccount';
import { MetricsProvider } from './hooks/useMetrics';
import { Register } from './pages/Register';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <MetricsProvider>
      <AccountProvider>
        <Register />
        <GlobalStyle />
      </AccountProvider>
    </MetricsProvider>
  );
}

export default App;
