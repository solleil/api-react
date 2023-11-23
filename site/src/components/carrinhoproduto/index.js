import { MostrarImagem } from '../../api/getAPI';
import './index.scss';
import { useEffect, useState } from 'react';
import storage from 'local-storage';

export default function CarrinhoProduto({ item: { produto: { info }, qtd }, removerItem, carregarCarrinhoSolleil }) {

  const [qtdProduto, setQtdProduto] = useState(qtd);
  const [result, setResult] = useState(1);
  const [preco, setPreco] = useState(0);
  const [novopreco, setNovopreco] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);



  function remover() {
    
    removerItem(info.id);


  }

  function attPreco() {
    setPreco(info.preco)
    setNovopreco(info.preco)

  }

  useEffect(() => {
    attPreco();

  }, [])


  function calcularSubtotal(){
    const subtotal = qtdProduto * info.preco;
    return subtotal;
  }

  function alterarQt(novaQtd){
    setQtdProduto(novaQtd);

    let carrinho = storage('carrinhosolleil')
    let itemiso = carrinho.find(item => item.id == info.id);
    itemiso.qtd = novaQtd;
    storage('carrinhosolleil', carrinho);
    carregarCarrinhoSolleil();
  }








  return (
    <div className="s-1-1">




      <div className='img-s1'>
        <img src={MostrarImagem(info.imagem)} alt='' />
      </div>
      <div className='s-1-2'>
        <div className='s-1-1-2'>
          <b> {info.nome} </b>
          <p> R$ {info.preco} </p>
        </div>

        <div className='s-1-1-3'>
          <div className='qtd-valor'><p>valor: <b>R$ {novopreco} </b></p></div>
          <select onChange={e => alterarQt(e.target.value)} value={qtdProduto} className='qtd-info'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
          </select>
          <div id='sub'>
            <b>Subtotal:
            R$:</b> {calcularSubtotal()}
          </div>
          <img className='lixo' onClick={remover} src='/assets/images/usuario/carrinho/lixo.png' alt='0' />
          <img className='lixoo' src='/assets/images/usuario/carrinho/coracao.png' alt='0' />
        </div>
      </div>
    </div>
  )
}