

import { useState } from 'react';
import Cabecalho from '../../../../components/cabecalho';
import './index.scss';
import Rodape from '../../../../components/rodape';

export default function Info() {


  const [indic, setIndic] = useState(false);
  const [comprov, setComprov] = useState(false);
  const [avalia, setAvalia] = useState(false);
  const [ingredientesatv, setIngrentesatv] = useState(false);

  function mudarI(){
    setIndic(!indic)
  if(indic === true){
    setComprov(false)
    setAvalia(false)
    setIngrentesatv(false)
  }
     
  }
  function mudarC(){
    setComprov(!comprov)
    if(comprov === true){
      setIndic(false)
      setAvalia(false)
      setIngrentesatv(false)
    }
  
  }
  function mudarA(){
    setAvalia(!avalia)
    if(avalia === true){
      setComprov(false)
      setIndic(false)
      setIngrentesatv(false)
    }
    
  }
  function mudarIng(){
    setIngrentesatv(!ingredientesatv)
  
  }
 

  return (
    <div className="pag-info">
      <Cabecalho/>
     <div className='td-info'>
        <img className='exemplo' src='/assets/images/usuario/info/exemplo.png' alt='' />
      
        <div className='info'>
          <div className='limpador'><h2>limpador facial sallve</h2></div>
          <div className='pl-limpa'><h3>para uma pele limpa e hidratada.</h3></div>
          <div className='vl-desconto'>
          <div ><h3>R$ 79,90</h3></div>
          <div ><h4>ou 3x de R$26,63</h4></div>
          </div>
         <div className='estrelas'>
          <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' />
          <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' />
          <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' />
          <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> 
          <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> 
           </div>

          <div className='disp'>
             <img className='disponivel' src='/assets/images/usuario/info/direito 1.png' alt='' />
             <h5>disponivel no estoque</h5>
           </div>


          <div>
            <div className='tamanhos-info'>  <h4>outros tamanhos disponíveis:</h4></div> 
            <div className='ml-1' > 
            <button className='ml'> 300ml  </button> 
            <button className='ml' > 160ml </button> 
            <button className='ml' > 60ml </button>
            </div>
           
         </div>
          <div className='qtd-info'>
          

          </div>

          <div className='compre-info'>
            <button>compre agora</button>
           </div>

           <div className='add-info'>
            <button> adicionar a sacola</button>
            <div>
           <img  className='coracao-info' src='/assets/images/usuario/info/image 22.png' alt='' />
           </div>
         
           </div>

          

          </div>
          
         </div> 


          <div className='opc-info'>

            <div className='opc-1'>
              
                <p onClick={mudarI}>indicações</p>
                <p onClick={mudarC}>comprovações</p>
                <p onClick={mudarA}>avaliações</p>
                <p onClick={mudarIng}>ingredientes ativos </p>

            </div>


            <div>
          
            {indic === true &&
              <>
              <div className='indica'>
                
                <img className='indica-s1' src='/assets/images/usuario/info/indica.png' alt='' />
                <h3>Todos os tipos de pele</h3>

                </div>
                
                <div className='indica-s2'>

                  <div className='indc-s1'>
                  <img className='indica-png' src='/assets/images/usuario/info/opcoes.png' alt='' /> 
                  <p>Melhora o aspecto da pele</p>
                  </div>

                 <div className='indc-s2'>
                  <img className='indica-png' src='/assets/images/usuario/info/opcoes.png' alt='' />
                  <p>Reduz a oleosidade</p> 
                  </div>

                 <div className='indc-s3'>
                  <img className='indica-png' src='/assets/images/usuario/info/opcoes.png' alt='' />
                  <p>Promove a maciez da pele</p>
                  </div>

                <div className='indc-s4'> 
                  <img className='indica-png' src='/assets/images/usuario/info/opcoes.png' alt='' />
                   <p>Antipoluição</p>
                   </div>
                  
                
                </div>


               </>} 
               
            </div>



            


            <div> 
            
              {comprov === true && 
              <>
              <div className='comprova'>

                <h2>PALOMA PALOMA PALOMKA </h2>
                
             
                </div>
               </>}
              
            </div>


            
            <div> 
           
          
              {avalia === true &&
              <>
              <div className='avaliac'>
                
              <h2>clara</h2>
             
                </div>
               </>}
              
            </div>


             
            <div> 
         
              {ingredientesatv === true &&
              <>
              <div className='ingred'>
                 
               
          
             
                </div>
               </>}
              
            </div>


            

       </div>

      
 
     </div>
   

    
      

      


  );
}