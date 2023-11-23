import { useState } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'
import { listarProdutos, listarCategorias, listarTiposdePele, listarNecessidades, listarMarcas } from '../../api/getAPI';
import { useEffect } from 'react';
import SearchBar from '../barraPesquisa';

export default function Cabecalho() {
  const [menu, setMenu] = useState(false);
  const [categoria, setCategoria] = useState(false);
  const [tipoPele, setTipoPele] = useState(false);
  const [necessidades, setNecessidades] = useState(false);
  const [marcas, setMarcas] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [categoriaS, setCategoriaS] = useState([]);
  const [tipopeleS, setTipopeleS] = useState([]);
  const [necesS, setNecesS] = useState([]);
  const [marcaS, setMarcaS] = useState([]);
  const [pesq, setPesq] = useState('');

  const navigate = useNavigate();

  function Mudar() {
    setMenu(!menu)
  }

  function FCategorias() {
    setCategoria(!categoria)
  }
  function FTipoPele() {
    setTipoPele(!tipoPele)
  }
  function FNecessidades() {
    setNecessidades(!necessidades)
  }
  function FMarcas() {
    setMarcas(!marcas)
  }

  function LogOut() {
    storage.remove('usuario-logado')
    navigate('/')
  }

  async function carregarProdutos() {
    const resp = await listarProdutos();
    setProdutos(resp)
  }

  async function carregarCategorias() {
    const respo = await listarCategorias();
    setCategoriaS(respo);
  }

  function navC(id) {
    navigate(`/produtos/${id}c`)
  }

  async function carregarTiposPele() {
    const respo = await listarTiposdePele();
    setTipopeleS(respo)
  }

  function navT(id) {
    navigate(`/produtos/${id}t`)
  }

  async function carregarNecess() {
    const respo = await listarNecessidades();
    setNecesS(respo);
  }

  function navN(id) {
    navigate(`/produtos/${id}n`)
  }

  async function carrregarMarcas() {
    const respo = await listarMarcas();
    setMarcaS(respo)
  }

  async function navM(id) {
    navigate(`/produtos/${id}m`)
  }


  useEffect(() => {
    carregarProdutos();
    carregarCategorias();
    carregarTiposPele();
    carregarNecess();
    carrregarMarcas();
  }, [])


  return (

    <div className="cabecalho">
      <div className="pisca">
        <h1>
          <span className="pisca-s1"><p id='frete'>FRETE GRÁTIS</p> <p>ACIMA DE R$120</p></span>
        </h1>
      </div>
      <div className="c1">


        <a href='/' className='c1-1'>
          <img src='/assets/images/usuario/cabecalho/logo_preta.png' alt='' />
          <p id='logo'> SOLLEIL</p>
        </a>




      </div>

      <div className="c-linha">  </div>

      <div className="c2">
        <div className="c2-1">
          <button id='menos' onClick={Mudar} className='funcaomudar'> <img src="/assets/images/geral/menu.png" alt="" />  </button></div>



        <div className="c2-2">
          <div className="input">
          <SearchBar />
          </div>
        </div>


        <div className="c2-3"> <button onClick={LogOut}> <img src="/assets/images/usuario/cabecalho/sair.png" alt="" /></button>
          <a href='/carrinho'> <img src="/assets/images/geral/sacola.png" alt="" /></a>
          <a href='/conta' className='conta' >  <img src="/assets/images/geral/perfil.png" alt="" /></a></div>

      </div>



      <div>
        {menu === true &&
          <>
            <div className='filtros'>


              <div>
                {categoria ? (<p onClick={FCategorias} className='yellow'>Categorias</p>) : (<p onClick={FCategorias} className='n-yellow'>Categorias</p>)}


                {categoria === true &&
                  <>
                    <div className='position'>
                      {categoriaS.map((item) => <h1 key={item.id} onClick={() => navC(item.id)}>{item.nome}</h1>)}
                    </div>
                  </>
                }
              </div>
              <div>

                {tipoPele ? (<p onClick={FTipoPele} className='yellow'>Tipo de pele</p>) : (<p onClick={FTipoPele} className='n-yellow'>Tipo de pele</p>)}

                {tipoPele === true &&
                  <>
                    <div className='position'>
                      {tipopeleS.map((item) => <h1 key={item.id} onClick={() => navT(item.id)}>{item.nome}</h1>)}
                    </div>
                  </>
                }
              </div>

              <div>
                {necessidades ? (<p onClick={FNecessidades} className='yellow'>Necessidades</p>) : (<p onClick={FNecessidades} className='n-yellow'>Necessidades</p>)}

                {necessidades === true &&
                  <>
                    <div className='position'>
                      {necesS.map((item) =><h1 key={item.id} onClick={() => navN(item.id)}>{item.nome}</h1>)}
                    </div>
                  </>
                }
              </div>


              <div>
                {marcas ? (<p onClick={FMarcas} className='yellow'>Marcas</p>) : (<p onClick={FMarcas} className='n-yellow'>Marcas</p>)}

                {marcas === true &&
                  <>
                    <div className='position'>
                     {marcaS.map((item) => <h1 key={item.id} onClick={() => navM(item.id)}>{item.nome}</h1>)}

                    </div>
                  </>
                }
              </div>

            </div>

          </>
        }
      </div>



 




    </div>


  );
}