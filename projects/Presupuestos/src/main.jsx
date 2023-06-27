import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header.jsx'
import './style/index.css'
import { Table } from './components/Table.jsx';
import StateVM from './context/StateVM.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section style={{padding:'10px'}}>
    <link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
    <Header />
    <div>
      <StateVM>
        <Table />
      </StateVM>
    </div>
  </section>
);