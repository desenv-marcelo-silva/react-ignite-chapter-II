import { useState } from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './TransactionsContext';

function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIsTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
