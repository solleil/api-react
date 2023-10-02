

import { useState } from 'react';
import Cabecalho from '../../../../components/cabecalho';
import './index.scss';

export default function Info() {


  const [indic, setIndic] = useState(true);
  const [comprov, setComprov] = useState(true);
  const [avalia, setAvalia] = useState(true);
  const [ingredientesatv, setIngrentesatv] = useState(true);

  function mudarI(){
    setIndic(!indic)
  }
  function mudarC(){
    setComprov(!comprov)
  }
  function mudarA(){
    setAvalia(!avalia)
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
          <div className='estrelas'> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' />  </div>
          <div><h5>disponivel no estoque</h5></div>
          <div>
            <div className='tamanhos-info'> <img className='disponivel' src='/assets/images/usuario/info/direito 1.png' alt='' /> <h4>outros tamanhos disponíveis:</h4></div> 
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

            <div>
                <p onClick={mudarI}>indicações</p>
                <p onClick={mudarC}>comprovações</p>
                <p onClick={mudarA}>avaliações</p>
                <p onClick={mudarIng}>ingredientes ativos</p>

            </div>


            <div>
          
            {indic === true &&
              <>
              <div>
                <img src='/assets/images/usuario/info/indica.png' alt='' />
                <p>Todos os tipos de pele</p>
                
                <div>
                  <p>Melhora o aspecto da pele</p>
                  <p>Reduz a oleosidade</p>
                  <p>Promove a maciez da pele</p>
                  <p>Antipoluição</p>
                </div>

                </div>
               </>} 
               
            </div>



            


            <div> 
            
              {comprov === false &&
              <>
              <div>
                
                <p>o Limpador Facial passou por uma série de estudos clínicos que garantem a segurança do produto:
                   Dermatologicamente testado em pele sensível - produto seguro para ser aplicado sobre a pele;
                   Oftalmologicamente testado - produto seguro para ser aplicado, com os olhos fechados;
                  Não-fototóxico e não-sensibilizante - o produto não causa irritação/sensibilização na pele;Não-comedogênico - o produto não promoveu aumento em comedões abertos e fechados, nem em pápulas e pústulas;
                  Hipoalergênico - o produto não induziu processo de irritação e sensibilização cutânea em nenhum voluntário durante o período de estudo.</p>
                
             
                </div>
               </>}
              
            </div>


            
            <div> 
           
          
              {avalia === false &&
              <>
              <div>
                 <div>
                 <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' />
                  
                 </div>

               
                
             
                </div>
               </>}
              
            </div>


             
            <div> 
         
              {ingredientesatv === false &&
              <>
              <div>
                 <div>
               
                  
                 </div>

               
                
             
                </div>
               </>}
              
            </div>


            

       </div>



     </div>
      

      


  );
}