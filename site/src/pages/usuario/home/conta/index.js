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
            <a href='a'>editar <img  src='/assets/images/usuario/conta/editar.png' alt=''/></a>
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














    </div>
  );
}