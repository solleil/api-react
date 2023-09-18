import React from 'react';

import './index.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Conta from './pages/usuario/home/conta';
import Inicial from './pages/usuario/home/inicial'

import Cadastro from './pages/usuario/cadastro/cadastro';
import Login from './pages/usuario/cadastro/login';

import Carrinho from './pages/usuario/produtos/carrinho';
import Info from './pages/usuario/produtos/info';
import IniProdutos from './pages/usuario/produtos/iniprodutos';
import Produtos from './pages/usuario/produtos/produtos';

import AddProduto from './pages/adm/add_produto';
import AlterarStatus from './pages/adm/alterar_status';
import EditarProduto from './pages/adm/editar_produto';
import Inicialadm from './pages/adm/home_adm';
import Loginadm from './pages/adm/loginadm';
import Graficos from './pages/adm/pagina_graficos';
import Cadastrocartao from './pages/usuario/cadastro/cadastrocartao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicial />} />
        <Route path='/conta' element={<Conta />} />

        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/login' element={<Login />} />

        <Route path='/produtos' element={<Produtos />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/iniproduto' element={<IniProdutos />} />
        <Route path='/info' element={<Info />} />

        <Route path='/addproduto' element={<AddProduto />} />
        <Route path='/alterarstatus' element={<AlterarStatus/>} />
        <Route path='/editarproduto' element={<EditarProduto />} />
        <Route path='/inicialadm' element={<Inicialadm />} />
        <Route path='/loginadm' element={<Loginadm />} />
        <Route path='/graficos' element={<Graficos />} />

        <Route path='/cadastrocartao' element={<Cadastrocartao />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

