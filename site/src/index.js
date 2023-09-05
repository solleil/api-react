import React from 'react';

import './index.scss';
import  ReactDOM  from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';










import Conta from './pages/usuario/home/conta';
import Inicial from './pages/usuario/home/inicial'

import Cadastro from './pages/usuario/cadastro/cadastro';
import Login from './pages/usuario/cadastro/login';

import Carrinho from './pages/usuario/produtos/carrinho';
import Info from './pages/usuario/produtos/info';
import Produtos from './pages/usuario/produtos/produtos';





import AddProduto from './pages/adm/add_produto';
import AlterarProduto from './pages/adm/alterar_status';
import Consultar from './pages/adm/consulta_geral';
import ConsultaProduto from './pages/adm/consulta_produto';
import Inicialadm from './pages/adm/home_adm';
import Loginadm from './pages/adm/login_adm';
import Graficos from './pages/adm/pagina_graficos';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Inicial/>} />
                <Route path='/conta' element={<Conta/>} />

                <Route path='/cadastro' element={<Cadastro/>} />
                <Route path='/login' element={<Login/>} />

                <Route path='/produtos' element={<Produtos/>} />
                <Route path='/carrinho' element={<Carrinho/>} />
                <Route path='/info' element={<Info/>} />




                <Route path='/addproduto' element={<AddProduto/>} />
                <Route path='/alterarstatus' element={<AlterarProduto/>} />
                <Route path='/consultar' element={<Consultar/>} />
                <Route path='/consultaproduto' element={<ConsultaProduto/>} />
                <Route path='/inicialadm' element={<Inicialadm/>} />
                <Route path='/loginadm' element={<Loginadm/>} />
                <Route path='/graficos' element={<Graficos/>} />
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

