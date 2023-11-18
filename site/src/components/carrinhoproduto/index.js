import { MostrarImagem, listarProdutosId } from '../../api/getAPI';
import { api_url } from '../../constats';
import './index.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage';

export default function CarrinhoProduto(props) {


  const [result, setResult] = useState(1);
  const [preco, setPreco] = useState(0);
  const [novopreco, setNovopreco] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  

  


  function mais() {
    const x = result + 1;
    setResult(x);
    const p = preco * x
    setNovopreco(p);

  };

  function menos() {
    if (result > 1) {
      const x = result - 1;
      setResult(x);
      setNovopreco(novopreco - preco)
    };
  };
  function attPreco() {
    setPreco(props.item.produto.preco)
    setNovopreco(props.item.produto.preco)

  }

  useEffect(() => {
    attPreco();

  }, [])









  return (
    <div className="s-1-1">




      <div className='img-s1'>
        <img src={MostrarImagem(props.item.produto.imagem)} alt='' />
        </div>
      <div className='s-1-2'>
        <div className='s-1-1-2'>
          <b> {props.item.produto.nome} </b>
          <p> {props.item.produto.preco} </p>
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
  )
}