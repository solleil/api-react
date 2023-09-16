import { useState } from 'react';
import Cabecalho from '../../../../components/cabecalho';
import Rodape from '../../../../components/rodape';
import './index.scss';

export default function Conta() {
    const[mostrar,setMostrar]= useState(false)

    function Mudar(){
        setMostrar(!mostrar)
    }



  return (




    <div className="pag-conta">
      <Cabecalho/>

      <div className='s1'>
          <p>Olá, </p>

        <div className='s1-1'>
          <p>seus pedidos:</p>
          <a href='coloca sempre o Href com alguma coisa, letras, sla, pls'> 
            veja tudo  <img src='/assets/images/usuario/inicial/seta.png' alt=''/> 
          </a>
        </div>

        <div className='s1-2'>

            <a href='aaa'>
              <img src='/assets/images/usuario/conta/carteira.png' alt=''/>
              <p>não pagos</p>
            </a>

            <a href='aaa'>
              <img src='/assets/images/usuario/conta/caixa.png' alt=''/>
              <p>processando</p>
            </a>

            <a href='aaa'>
              <img src='/assets/images/usuario/conta/caminhao.png' alt=''/>
              <p>a caminho</p>
            </a>

            <a href='aaa'>
              <img src='/assets/images/usuario/conta/comentario.png' alt=''/>
              <p>comentados</p>
            </a>

            <a href='aaa'>
              <img src='/assets/images/usuario/conta/caixa2.png' alt=''/>
              <p>devolução</p>
            </a>



        </div>


      </div>


      <div className='linha'>.</div>

      <div className='s2'>

          <div className='s2-1'>
            <p>dados pessoais:</p>
            <p className='p' >editar <img  src='/assets/images/usuario/conta/editar.png' alt=''/></p>
          </div>

          <div className='s2-2'>
                <div className='s2-2-info'>
                  <p>nome:</p>
                  <p>***</p>
                </div>

                <div className='s2-2-info'>
                  <p>sobrenome:</p>
                  <p>***</p>
                </div>

                <div className='s2-2-info'>
                  <p>tipo de pele:</p>
                  <select>
                    <option>normal</option>
                    <option>sensível</option>
                    <option>mista</option>
                    <option>oleosa</option>
                    <option>seca</option>
                  </select>
                </div>

                <div className='s2-2-info'>
                  <p>email:</p>
                  <p>***</p>
                </div>

                <div className='s2-2-info'>
                  <p>cpf:</p>
                  <p>***</p>
                </div>

                <div className='s2-2-info'>
                  <p>telefone:</p>
                  <p>***</p>
                </div>
                

          </div>
        
      </div>


      <div className='linha'>.</div>

      <div className='s3'>

        <div className='s3-1'>
          <p>endereços</p>
          <p className='p' onClick={Mudar}>adicionar ou editar <img  src='/assets/images/usuario/conta/editar.png' alt=''/></p>
        </div>

        <div className='s3-lado'>
        <div className='s3-2'>
          <p>Rua: ***</p> <p>Nº ***</p> <p>Bairro:***</p> <p>Cidade:***</p>
          <p>Cel:***</p> <p>Cep:***</p>
        </div>

        {mostrar === false &&
        <>
        </>}

        {mostrar === true &&
        <>
        <div className='s3-3'>
          <input type='text' placeholder='rua' className='rua'/>
          <input type='text' placeholder='nº' className='numero'/>
          <input type='text' placeholder='bairro' className='bairro'/>
          <input type='text' placeholder='cidade' className='cidade'/>
          <input type='text' placeholder='cep' className='cep'/>
      
          <button> <img src='/assets/images/usuario/conta/salvar.png' alt=''/>  </button>
          <button> <img src='/assets/images/usuario/conta/editar.png' alt=''/>  </button>
          <button> <img src='/assets/images/usuario/conta/excluir.png' alt=''/>  </button>
        </div>
        </>}

        
        </div>

        


        


      </div>



      <div className='linha'>.</div>

      <div className='s4'>
          <div className='s4-1'>
            <p>favoritos <img alt='' src='/assets/images/usuario/conta/fav.png'/> </p>
           
          </div>

          <div className='s4-2'>

          <div className='s6-1-p'>
          
          <img src='/assets/images/usuario/iniprodutos/s2-2.png' alt=''/>
            <p>  WATER SLEEPING MASK </p>  <p> 
            <b> R$28,90 </b> ou 3x R$10,28 </p>
        </div>
        <div className='s6-1-p'>
      
          <img src='/assets/images/usuario/iniprodutos/s2-1.png' alt=''/>
            <p>  LIMPADOR ANTIACNE </p>  <p> 
            <b> R$54,90 </b> ou 5x R$10,28 </p>
        </div>
        <div className='s6-1-p'>
      
          <img src='/assets/images/usuario/iniprodutos/s2-2.png' alt=''/>
            <p>  WATER SLEEPING MASK </p>  <p> 
            <b> R$28,90 </b> ou 3x R$10,28 </p>
        </div>
        <div className='s6-1-p'>
      
          <img src='/assets/images/usuario/iniprodutos/s2-1.png' alt=''/>
            <p>  LIMPADOR ANTIACNE </p>  <p> 
            <b> R$54,90 </b> ou 5x R$10,28 </p>
        </div>

        <img src='/assets/images/usuario/conta/seta.png'  alt='' className='seta'/>

          </div>

      </div>






      <Rodape/>


    </div>
  );
}