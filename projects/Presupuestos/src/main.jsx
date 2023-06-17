import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header.jsx'
import './style/index.css'
import { Categories } from './components/Categories.jsx';
import { Formulario } from './components/Formulario.jsx';
import { Table } from './components/Table.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section>
    <link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
    <Header />
    <div className='tabcontent p-2'>
      <Table />
    </div>
  </section>

);
