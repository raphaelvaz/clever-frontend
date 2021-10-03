import React from 'react';
import { AccountProvider } from './hooks/useAccount';
import { Register } from './pages/Register';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <AccountProvider>
      <Register />
      <GlobalStyle />
    </AccountProvider>
  );
}

export default App;
