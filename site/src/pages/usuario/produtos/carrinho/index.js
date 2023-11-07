import './index.scss';
import Rodape from '../../../../components/rodape';
import Cabecalho from '../../../../components/cabecalho';
import { useState } from 'react';

export default function Carrinho() {
  const [result, setResult] = useState(1);
  const [preco, setPreco] = useState(20);
  const [novopreco, setNovopreco] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function mais() {
    const x = result + 1;
    setResult(x);
    const p= preco * x
    setNovopreco(p);
    
  };
  
  function menos() {
    if (result > 1) {
      const x = result - 1;
      setResult(x);
      setNovopreco(novopreco-preco)
    };
  };

 

  return (
    <div className="c-1">
      <Cabecalho/>
      <div className='s-1'>
        <p><b>MINHA SACOLA DE COMPRAS</b></p>
        <div className="s-1-1">
          <div className='img-s1'><img src='/assets/images/usuario/carrinho/produto-sallve.png' alt='' /></div>
          <div className='s-1-2'>
            <div className='s-1-1-2'>
              <b>hidratante antiatrito sallve</b>
              <p>valor: R$20,00</p>
            </div>
            <div className='s-1-1-3'>
              <div className='qtd-valor'><p>valor: <b>R$ {novopreco} </b></p></div>
              <div className='qtd-info'>                 <button type='number' value={num1} onChange={(e) => setNum1(Number(e.target.value))} onClick={menos}> <p>-</p></button>
                <b onChange={(e) => setResult(Number(e.target.value))}> {result}</b >
                <button type='number' value={num2} onChange={(e) => setNum2(Number(e.target.value))} onClick={mais}> <p>+</p></button></div>
              <img src='/assets/images/usuario/carrinho/lixo.png' alt='0' />
              <img src='/assets/images/usuario/carrinho/coracao.png' alt='0' />
            </div>
          </div>
        </div>
      </div>

      <div className='s-2'>
        <div className='b-1'>total de itens: <b>3</b></div>
        <div className='b-1'>valor total: <b>R$20,00</b></div>
        <button className='b-3'><b>FINALIZAR COMPRA</b></button>
      </div>
      <Rodape/>
    </div>
  );
}