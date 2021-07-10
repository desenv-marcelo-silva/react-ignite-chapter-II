import { useContext } from 'react';

import { TransactionsContext } from '../../TransactionsContext';

import { incomeImg, outcomeImg, totalImg } from '../../assets';

import { Container } from './styles';

export function Summary() {
  const transactions = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="entradas" />
        </header>
        <strong>-R$ 500,00</strong>
      </div>

      <div className="hightlight">
        <header>
          <p>Saldo</p>
          <img src={totalImg} alt="entradas" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}
