import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  ammount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface ProviderContextProps {
  children: ReactNode;
}

interface TransactionContextProps {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps
);

export function TransactionsProvider({ children }: ProviderContextProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);
  }

  useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
