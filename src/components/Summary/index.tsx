import { useContext } from 'react';

import { TransactionsContext } from '../../TransactionsContext';

import { incomeImg, outcomeImg, totalImg } from '../../assets';

import { Container } from './styles';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.ammount;
        acc.total += transaction.ammount;
      } else {
        acc.withdraws += transaction.ammount;
        acc.total -= transaction.ammount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="entradas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="hightlight">
        <header>
          <p>Saldo</p>
          <img src={totalImg} alt="entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
