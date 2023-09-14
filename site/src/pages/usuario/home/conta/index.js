import Cabecalho from '../../../../components/cabecalho';
import './index.scss';

export default function Conta() {
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

            <div>
              <img src='/assets/images/usuario/conta/carteira.png' alt=''/>
              <p>não pagos</p>
            </div>

            <div>
              <img src='/assets/images/usuario/conta/caixa.png' alt=''/>
              <p>processando</p>
            </div>

            <div>
              <img src='/assets/images/usuario/conta/caminhao.png' alt=''/>
              <p>a caminho</p>
            </div>

            <div>
              <img src='/assets/images/usuario/conta/comentario.png' alt=''/>
              <p>comentados</p>
            </div>

            <div>
              <img src='/assets/images/usuario/conta/caixa2.png' alt=''/>
              <p>devolução</p>
            </div>



        </div>


      </div>




      <div className='s2'>

        
      </div>














    </div>
  );
}