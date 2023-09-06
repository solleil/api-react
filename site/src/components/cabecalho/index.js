import './index.scss'

export default function Cabecalho() {
    return (
      
      <div className="cabecalho">
        <div className="c1">
        <img src='/assets/images/usuario/cabecalho/logo_preta.png' alt=''/>
              <h1> Solleil</h1>
        </div>
             
              <div className="linha">  </div>

              <div className="c2">
                <div className="c2-1"> <button> <img src="/assets/images/geral/menu.png" alt=""   /></button></div>
                  

                <div className="c2-2"> 
                          <div className="input">
                             <input type="text" /> <button> <img src="/assets/images/geral/pesquisa.png"/></button>
                          </div> 
                 </div>
                  

                <div className="c2-3"> <button> <img src="/assets/images/geral/fav.png" alt=""   /></button>
                  <button> <img src="/assets/images/geral/sacola.png" alt=""   /></button>
                  <button> <img src="/assets/images/geral/perfil.png" alt=""   /></button></div>
                  
              </div>
      </div>
    );
  }