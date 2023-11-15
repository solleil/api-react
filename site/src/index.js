import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Conta from './pages/usuario/home/conta';
import Inicial from './pages/usuario/home/inicial'

import CadastroUsuario from './pages/usuario/cadastro/cadastro';
import Login from './pages/usuario/cadastro/login';

import Carrinho from './pages/usuario/produtos/carrinho';
import Info from './pages/usuario/produtos/info';
import IniProdutos from './pages/usuario/produtos/iniprodutos';
import Produtos from './pages/usuario/produtos/produtos';
import Status from './pages/usuario/produtos/status';
import Enviado from './pages/usuario/produtos/enviado';

import AddProduto from './pages/adm/add_produto';
import AlterarStatus from './pages/adm/alterar_status';
import EditarProduto from './pages/adm/editar_produto';
import Inicialadm from './pages/adm/home_adm';
import Loginadm from './pages/adm/loginadm';
import Graficos from './pages/adm/pagina_graficos';
import FiltrarProduto from './pages/adm/filtrar_pedido';

import Consulta from './pages/adm/consulta_produto';
import Escolherpagamento from './pages/usuario/pagamento/pagamentocartao';
import Pagaprovado from './pages/usuario/pagamento/aprovado';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicial />} />
        <Route path='/conta' element={<Conta />} />

        <Route path='/cadastro' element={<CadastroUsuario />} />
        <Route path='/login' element={<Login />} />

        <Route path='/produtos' element={<Produtos />} />
        <Route path='/status' element={<Status />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/inicial/produto/:idParams' element={<IniProdutos />} />
        <Route path='/info/:idParams' element={<Info />} />
        <Route path='/enviado' element={<Enviado />} />

        <Route path='/pagamento/cartao' element={<Escolherpagamento />} />
        <Route path='/aprovado' element={<Pagaprovado />} />

        <Route path='/filtrarproduto' element={<FiltrarProduto />} />
        <Route path='/addproduto' element={<AddProduto />} />
        <Route path='/alterarstatus' element={<AlterarStatus />} />
        <Route path='/editarproduto/:idParams' element={<EditarProduto />} />
        <Route path='/home/adm' element={<Inicialadm />} />
        <Route path='/login/adm' element={<Loginadm />} />
        <Route path='/graficos' element={<Graficos />} />
        <Route path='/consultar/produto' element={<Consulta />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

