import { useState, useEffect } from 'react';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import './index.scss'
import { listarAdminId } from '../../api/getAPI';

export default function CabecalhoAdm() {
  const [admin, setAdmin] = useState({});
  const [menu, setMenu] = useState(false)
  const [perfil, setPerfil] = useState(false);
  
  const navigate = useNavigate();

  if (storage('admin-logado')) {
    var id = storage('admin-logado').id
  }

  async function carregarAdm() {
    const respo = await listarAdminId(id);
    setAdmin(respo)
  }

  function Mudar() {
    setMenu(!menu)
  }

  function MudarP() {
    setPerfil(!perfil)
  }

  useEffect(() => {
    carregarAdm()
    if (!storage('admin-logado')) {
      navigate('/login/adm')
    };
  }, [])

  function Sair(){
    storage.remove('admin-logado')
    navigate('/login/adm')
  }



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
                <a href='http://localhost:3000/home/adm'>Menu</a>
                <a href='http://localhost:3000/graficos'>Gráficos</a>
                <a href='http://localhost:3000/filtrarpedido'>Filtro de pedidos</a>
                <a href='http://localhost:3000/alterar/status'>Editar pedido</a>
                <a href='http://localhost:3000/edicao'>Editar Manual</a>
                <a href='http://localhost:3000/consultar/produto'>Consulta de produtos</a>

              </div>
            </>
          }
        </div>

        <div className='ac3-2'>
          {perfil === true &&
            <>
              <div className='perfilAberto'>
                <img src='/assets/images/adm/inicial_adm/exemplo.png' alt='' />
                <p>{`${admin.nome} ${admin.sobrenome}}`}</p>
                <p>{admin.cargo}<br></br>São Paulo</p>
                <button onClick={Sair}>Sair</button>
              </div>
            </>
          }
        </div>
      </div>


    </div>
  );
}