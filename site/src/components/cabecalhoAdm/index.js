import { useState } from 'react';
import './index.scss'

export default function CabecalhoAdm() {
  const [menu, setMenu] = useState(true)
  const [perfil, setPerfil] = useState(true)

  function Mudar() {
    setMenu(!menu)
  }
  function MudarP() {
    setPerfil(!perfil)
  }



  return (

    <div className="cabecalho">
      <div className="c1">


        <img src='/assets/images/usuario/cabecalho/logo_preta.png' alt='' />
        <p> Solleil</p>
      </div>

      <div className="c-linha">  </div>

      <div className="c2">
        <div className="c2-1">
          <button id='menos' onClick={Mudar} className='funcaomudar'> <img src="/assets/images/geral/menu.png" alt="" /> {menu ? '-' : '+'}  </button></div>



        <div className="c2-2">
          <div className="input">
            <input type="text" /> <button> <img src="/assets/images/geral/pesquisa.png" alt="" /></button>
          </div>
        </div>


        <div className="c2-3">
          <a href='http://localhost:3000/editarproduto'> <img src='/assets/images/adm/cabecalho/editar.png' alt='' /></a>
          <a href='http://localhost:3000/addproduto'> <img src='/assets/images/adm/cabecalho/add.png' alt='' /></a>
          <button onClick={MudarP}> <img src="/assets/images/geral/perfil.png" alt="" /></button></div>

      </div>


      <div className='teste'>
        <div className='ac3-1'>

          {menu === true &&
            <>
              <div className='menuAberto'>
                <p className='menu'>Menu</p>
                <a href='http://localhost:3000/graficos'>Gráficos</a>
                <a href='http://localhost:3000/consultapedido'>Consulta de pedidos</a>
                <a href='http://localhost:3000/alterarstatus'>Editar pedido</a>
                <a href='http://localhost:3000/consultaprodutos'>Consulta de produtos</a>

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