
import { useState } from 'react';
import './index.scss'

export default function Cabecalho() {
      const[menu, setMenu] = useState(true)

      function Mudar(){
        setMenu(!menu)
    }



    return (
      
      <div className="cabecalho">
        <div className="c1">

        {menu === true &&
        <>
        <img src='/assets/images/usuario/cabecalho/logo_preta.png' alt=''/>
              <div className='sollei'> Solleil</div>
          </>
              }



        {menu === false &&
        <>
        <div className='filtros'>
        <img src='/assets/images/usuario/cabecalho/logo_preta.png' alt=''/>
              <p>Categorias</p>
              <p>Tipo de pele </p>
              <p>Necessidades</p>
              <p>Marcas</p>
        </div>
        
          </>
              }
      

        </div>
 
              <div className="c-linha">  </div>

              <div className="c2">
                <div className="c2-1"> 
                <button id='menos' onClick={Mudar} className='funcaomudar'> <img src="/assets/images/geral/menu.png" alt=""   /> {menu ? '-' : '+'}  </button></div>
                
                

                <div className="c2-2"> 
                          <div className="input">
                             <input type="text" /> <button> <img src="/assets/images/geral/pesquisa.png" alt=""/></button>
                          </div> 
                 </div>
                  

                <div className="c2-3"> <button> <img src="/assets/images/geral/fav.png" alt=""   /></button>
                  <button> <img src="/assets/images/geral/sacola.png" alt=""   /></button>
                  <button> <img src="/assets/images/geral/perfil.png" alt=""   /></button></div>
                  
              </div>
      </div>
    );
  }