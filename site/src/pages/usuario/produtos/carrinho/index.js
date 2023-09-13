import './index.scss';
import Cabecalho from '../../../../components/cabecalho';

export default function Carrinho() {
  return (
    <div className="c-1">
      <Cabecalho/>
      <div className='s-1'>
        <p><b>MINHA SACOLA DE COMPRAS</b></p>

        
          <div className="s-1-1">
            <div className='img-s1'><img src='/assets/images/usuario/carrinho/produto-sallve.png' alt='' /></div> 
              <div className='s-1-2'>
                <div className='s-1-1-2'><p>hidratante antiatrito sallve</p></div>
                      <div className='s-1-1-3'>
                            <div><p>valor: R$</p></div>
                            <div><p>qtd</p></div>
                            <img src='/assets/images/usuario/carrinho/lixo.png' alt=''/>
                            <img src='/assets/images/usuario/carrinho/coracao.png' alt=''/>
                      </div>
            </div>
          </div>

      </div>
    </div>
  
  );
}