import { useState } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'
import { listarProdutos, buscarProdutos } from '../../api/getAPI';
import { useEffect } from 'react';

export default function Cabecalho() {
      const[menu, setMenu] = useState(false)
      const[categoria, setCategoria] = useState(false)
      const[tipoPele, setTipoPele] = useState(false)
      const[necessidades, setNecessidades] = useState(false)
      const[marcas, setMarcas] = useState(false)
      const [ produtos, setProdutos] = useState('')

      const[ pesq, setPesq] = useState('')


      function Mudar(){
        setMenu(!menu)
    }
    
    const navigate = useNavigate();


    function FCategorias(){
      setCategoria(!categoria)
    }
    function FTipoPele(){
      setTipoPele(!tipoPele)
    }
    function FNecessidades(){
      setNecessidades(!necessidades)
    }
    function FMarcas(){
      setMarcas(!marcas)
    }

    function LogOut(){
      storage.remove('usuario-logado')
      navigate('/')
    }

    function navFiltro(id) {
      navigate(`/produtos/${id}`)
    }

    async function carregarProdutos(){
      const resp = await listarProdutos();
      console.log(resp)
      setProdutos(resp)
    }

   

    useEffect(() => {
      carregarProdutos();
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
        <img src='/assets/images/usuario/cabecalho/logo_preta.png' alt=''/>
              <p id='logo'> SOLLEIL</p>
        </a>
        
         


        </div>
 
              <div className="c-linha">  </div>

              <div className="c2">
                <div className="c2-1"> 
                <button id='menos' onClick={Mudar} className='funcaomudar'> <img src="/assets/images/geral/menu.png" alt=""   />  </button></div>
                
                

                <div className="c2-2"> 
                          <div className="input">
                             <input className='inp' type="text" value={pesq} onChange={e => setPesq(e.target.value)}/> 
                             <button> <img src="/assets/images/geral/pesquisa.png" alt="" onClick={carregarProdutos}/></button>
                          </div> 
                 </div>
                  

                <div className="c2-3"> <button onClick={LogOut}> <img src="/assets/images/usuario/cabecalho/sair.png" alt=""   /></button>
                  <a href='/carrinho'> <img src="/assets/images/geral/sacola.png" alt=""/></a>
                  <a href='/conta' className='conta' >  <img src="/assets/images/geral/perfil.png" alt="" /></a></div>
                  
              </div>



              <div>
              {menu === true &&
        <>
        <div className='filtros'>
      
        
        <div>    
          {categoria ? ( <p onClick={FCategorias}  className='yellow'>Categorias</p>) : (<p onClick={FCategorias} className='n-yellow'>Categorias</p>)}
          
           
          {categoria === true &&
          <>
          <div className='position'>
            <a href='a' onClick={() => navFiltro(1)}> Máscaras</a>
            <a href='a' onClick={() => navFiltro(2)}> Limpadores   </a>
            <a href='a' onClick={() => navFiltro(3)}>Séruns</a>
            <a href='a' onClick={() => navFiltro(4)}>Proteção solar</a>
            <a href='a' onClick={() => navFiltro(5)}>Corpo</a>
            <a href='a' onClick={() => navFiltro(6)}>Esfoliantes</a>
            <a href='a' className='a' onClick={() => navFiltro(7)}>Hidratantes</a>
          </div>
          </>
          }
        </div>



        <div>   

        {tipoPele ? ( <p onClick={FTipoPele}  className='yellow'>Tipo de pele</p>) : (<p onClick={FTipoPele} className='n-yellow'>Tipo de pele</p>)}
    
          {tipoPele === true &&
          <>
          <div className='position'>
            <a href='a' onClick={() => navFiltro(1)}>Todos os tipos</a>
            <a href='a' onClick={() => navFiltro(2)}> Pele mista  </a>
            <a href='a' onClick={() => navFiltro(3)}>Pele seca</a>
            <a href='a' onClick={() => navFiltro(4)}>Pele oleosa</a>
            <a href='a' onClick={() => navFiltro(5)}>Pele sensível</a>
            <a href='a' onClick={() => navFiltro(6)}>Pele normal</a>
          </div>
          </>
          }
        </div>

        <div>  
        {necessidades ? ( <p onClick={FNecessidades}  className='yellow'>Necessidades</p>) : (<p onClick={FNecessidades} className='n-yellow'>Necessidades</p>)} 
       
          {necessidades === true &&
          <>
          <div className='position'>
            <a href='a' onClick={() => navFiltro(1)}>Acne</a>
            <a href='a' onClick={() => navFiltro(2)}> Oleosidade  </a>
            <a href='a' onClick={() => navFiltro(3)}>Olheiras</a>
            <a href='a' onClick={() => navFiltro(4)}>Cicatrizes/textura</a>
            <a href='a' onClick={() => navFiltro(5)}>Antipoluição</a>
            <a href='a' onClick={() => navFiltro(6)}>Cravos</a>
            <a href='a' onClick={() => navFiltro(7)}>Hiperpigmentação</a>
          </div>
          </>
          }
        </div>


        <div>   
        {marcas ? ( <p onClick={FMarcas}  className='yellow'>Marcas</p>) : (<p onClick={FMarcas} className='n-yellow'>Marcas</p>)}

          {marcas === true &&
          <>
          <div className='position'>
            <a href='a' >Sallve</a>
            <a href='a'> Cerave </a>
            <a href='a'>Principia</a>
            <a href='a'>Laneige</a>
            <a href='a'>La roche</a>
            <a href='a'>Creamy</a>
       
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