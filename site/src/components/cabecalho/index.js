
import { useState } from 'react';
import './index.scss'

export default function Cabecalho() {
      const[menu, setMenu] = useState(true)
      const[categoria, setCategoria] = useState(false)
      const[tipoPele, setTipoPele] = useState(false)
      const[necessidades, setNecessidades] = useState(false)
      const[marcas, setMarcas] = useState(false)


      function Mudar(){
        setMenu(!menu)
    }



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



    return (
      
      <div className="cabecalho">
        <div className="c1">

        {menu === true &&
        <>
        <a href='/' className='c1-1'>
        <img src='/assets/images/usuario/cabecalho/logo_preta.png' alt=''/>
              <p> Solleil</p>
        </a>
        
          </>
              }



        {menu === false &&
        <>
        <div className='filtros'>
        <img src='/assets/images/usuario/cabecalho/logo_preta.png' alt=''/>
        
        <div>    
          {categoria ? ( <p onClick={FCategorias}  className='yellow'>Categorias</p>) : (<p onClick={FCategorias} className='n-yellow'>Categorias</p>)}
          
           
          {categoria === true &&
          <>
          <div className='position'>
            <a href='a'>Máscaras</a>
            <a href='a'> Limpadores   </a>
            <a href='a'>Séruns</a>
            <a href='a'>Proteção solar</a>
            <a href='a'>Corpo</a>
            <a href='a'>Esfoliantes</a>
            <a href='a'>Hidratantes</a>
          </div>
          </>
          }
        </div>



        <div>   

        {tipoPele ? ( <p onClick={FTipoPele}  className='yellow'>Tipo de pele</p>) : (<p onClick={FTipoPele} className='n-yellow'>Tipo de pele</p>)}
    
          {tipoPele === true &&
          <>
          <div className='position'>
            <a href='a'>Todos os tipos</a>
            <a href='a'> Pele mista  </a>
            <a href='a'>Pele seca</a>
            <a href='a'>Pele oleosa</a>
            <a href='a'>Pele sensível</a>
            <a href='a'>Pele normal</a>
          </div>
          </>
          }
        </div>

        <div>  
        {necessidades ? ( <p onClick={FNecessidades}  className='yellow'>Necessidades</p>) : (<p onClick={FNecessidades} className='n-yellow'>Necessidades</p>)} 
       
          {necessidades === true &&
          <>
          <div className='position'>
            <a href='a'>Acne</a>
            <a href='a'> Oleosidade  </a>
            <a href='a'>Olheiras</a>
            <a href='a'>Cicatrizes/textura</a>
            <a href='a'>Antipoluição</a>
            <a href='a'>Cravos</a>
            <a href='a'>Hiperpigmentação</a>
          </div>
          </>
          }
        </div>


        <div>   
        {marcas ? ( <p onClick={FMarcas}  className='yellow'>Marcas</p>) : (<p onClick={FMarcas} className='n-yellow'>Marcas</p>)}

          {marcas === true &&
          <>
          <div className='position'>
            <a href='a'>Sallve</a>
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
 
              <div className="c-linha">  </div>

              <div className="c2">
                <div className="c2-1"> 
                <button id='menos' onClick={Mudar} className='funcaomudar'> <img src="/assets/images/geral/menu.png" alt=""   />  </button></div>
                
                

                <div className="c2-2"> 
                          <div className="input">
                             <input type="text" /> <button> <img src="/assets/images/geral/pesquisa.png" alt=""/></button>
                          </div> 
                 </div>
                  

                <div className="c2-3"> <button> <img src="/assets/images/geral/fav.png" alt=""   /></button>
                  <a href='/carrinho'> <img src="/assets/images/geral/sacola.png" alt=""/></a>
                  <a href='/conta'> <img src="/assets/images/geral/perfil.png" alt="" /></a></div>
                  
              </div>
      </div>
    );
  }