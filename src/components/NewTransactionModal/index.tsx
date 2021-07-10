import { FormEvent, useContext, useState } from 'react';

import Modal from 'react-modal';

import { TransactionsContext } from '../../TransactionsContext';

import { closeImg, incomeImg, outcomeImg } from '../../assets';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionProps) {
  const [type, setType] = useState('deposit');
  const [ammount, setAmmount] = useState(0);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');

  const { createTransaction } = useContext(TransactionsContext);

  function handleNewTransaction(event: FormEvent) {
    event.preventDefault();
    createTransaction({
      title,
      ammount,
      category,
      type,
    });
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleNewTransaction}>
        <h2>Cadastrar transacao</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={ammount}
          onChange={(event) => setAmmount(+event.target.value)}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType('deposit');
            }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType('withdraw');
            }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
