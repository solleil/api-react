import './index.scss';
import Cabecalho from '../../../../components/cabecalho';
import { useState } from 'react';

export default function Carrinho() {

  const [n1, setNum1] = useState(0)
  const [n2, setNum2] = useState(0)
  const [result, setResult] = useState(0)




  function mais(){
    let x= result + 1
    setResult(x)
  }
  function menos(){
    if(result > 0){
      let x= result - 1
    setResult(x)
    }
    
  }












  return (
    <div className="c-1">
      <Cabecalho/>
      <div className='s-1'>
        <p><b>MINHA SACOLA DE COMPRAS</b></p>

        
          <div className="s-1-1">
            <div className='img-s1'><img src='/assets/images/usuario/carrinho/produto-sallve.png' alt='' /></div> 
              <div className='s-1-2'>
                <div className='s-1-1-2'><b>hidratante antiatrito sallve</b></div>
                      <div className='s-1-1-3'>
                            <div className='qtd-valor'><p>valor: <b>R$ </b></p></div>
                            <div className='qtd-info'>                 <button type='number' value={n1} onChange={(e) => setNum1(Number(e.target.value))} onClick={menos}> <p>-</p></button>
                 <b value={result} onChange={(e) => setResult(Number(e.target.value))}> {result}</b >
                 <button type='number' value={n2} onChange={(e) => setNum2(Number(e.target.value))} onClick={mais}> <p>+</p></button></div>
                            <img src='/assets/images/usuario/carrinho/lixo.png' alt=''/>
                            <img src='/assets/images/usuario/carrinho/coracao.png' alt=''/>
                      </div>
            </div>
          </div>

      </div>
    </div>
  
  );
}