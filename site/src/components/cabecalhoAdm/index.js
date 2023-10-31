import { useState, useEffect } from 'react';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import './index.scss'

export default function CabecalhoAdm() {
  const [menu, setMenu] = useState(false)
  const [perfil, setPerfil] = useState(false)

  function Mudar() {
    setMenu(!menu)
  }
  function MudarP() {
    setPerfil(!perfil)
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!storage('admin-logado')) {
      navigate('/loginadm')
    };
  }, [])



  return (

    <div className="cabecalho">
      <div className="c1">

      <a href='/inicial' className='c1-1'> <img src='/assets/images/usuario/cabecalho/logo_preta.png' alt='' />
        <p id='log' > SOLLEIL</p></a>
       
      </div>

      <div className="c-linha-adm">  </div>

      <div className="c2">
        <div className="c2-1">
          <button id='menos' onClick={Mudar} className='funcaomudar'> <img src="/assets/images/geral/menu.png" alt="" /> {menu ? '-' : '+'}  </button></div>



        <div className="c2-2">
          <div className="input">
            <input type="text" /> <button> 
              <img src="/assets/images/geral/pesquisa.png" alt="" /></button>
          </div>
        </div>


        <div className="c2-3">
          <a href='http://localhost:3000/editarproduto' className='editarAdm'> 

          <img src='/assets/images/adm/cabecalho/editar.png' alt='' /></a>

          <a href='http://localhost:3000/addproduto' className='addAdm'> 
          <img src='/assets/images/adm/cabecalho/add.png' alt='' />
          </a>

          <button onClick={MudarP}> <img src="/assets/images/geral/perfil.png" alt="" /></button></div>

      </div>


      <div className='teste'>
        <div className='ac3-1'>

          {menu === true &&
            <>
              <div className='menuAberto'>
                <a href='http://localhost:3000/inicialadm'>Menu</a>
                <a href='http://localhost:3000/graficos'>Gráficos</a>
                <a href='http://localhost:3000/consultapedido'>Consulta de pedidos</a>
                <a href='http://localhost:3000/alterarstatus'>Editar pedido</a>
                <a href='http://localhost:3000/consultaproduto'>Consulta de produtos</a>

              </div>
            </>
          }
        </div>







        <div className='ac3-2'>
          {perfil === true &&
            <>
              <div className='perfilAberto'>
                <img src='/assets/images/adm/inicial_adm/exemplo.png' alt='' />
                <p>Elisangela Silva</p>
                <p>Administrador Financeiro<br></br>São Paulo, São Jose dos Campos</p>
                <p> <b>status:</b> online</p>
              </div>
            </>
          }
        </div>
      </div>


    </div>
  );
}