import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';



import Inicial from './pages/usuario/home/inicial/index.js';
import Conta from './pages/usuario/home/conta/index.js';

import Cadastro from './pages/usuario/cadastro/cadastro/index.js';
import Login from './pages/usuario/cadastro/login/index.js';

import Pagamento from './pages/usuario/pedidos/pagamento/index.js';

import Carrinho from './pages/usuario/produtos/info/index.js';
import Info from './pages/usuario/produtos/info/index.js';
import Produtos from './pages/usuario/produtos/produtos/index.js';




import { BrowserRouter, Route, Routes } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>


      <Route path='/' element={<Inicial/>}/>
      <Route path='/conta' element={<Conta/>}/>

      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route path='/pagamento' element={<Pagamento/>}/>

      <Route path='/carrinho' element={<Carrinho/>}/>
      <Route path='/info' element={<Info/>}/>
      <Route path='/produtos' element={<Produtos/>}/>


    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


