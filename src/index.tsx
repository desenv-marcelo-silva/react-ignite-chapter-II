import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from 'miragejs';

import App from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance bigdata',
          type: 'deposit',
          category: 'Dev',
          ammount: 1200,
          createdAt: new Date('2021-03-11 08:35:20'),
        },
        {
          id: 2,
          title: 'Condomínio',
          type: 'withdraw',
          category: 'Casa',
          ammount: 343.59,
          createdAt: new Date('2021-03-19 13:55:02'),
        },
        {
          id: 3,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          ammount: 1200,
          createdAt: new Date('2021-03-19 13:45:38'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
