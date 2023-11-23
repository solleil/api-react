import './index.scss';
import Rodape from '../../../../components/rodape';
import Cabecalho from '../../../../components/cabecalho';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { listarProdutosIdCarrinho } from '../../../../api/getAPI';
import CarrinhoProduto from '../../../../components/carrinhoproduto';

export default function Carrinho() {
  const [itens, setItens] = useState([]);


  function calcularValorTotal() {
    let total = 0;
    for (let item of itens) {
      total = total + item.produto.info.preco * item.qtd;
    }

    return total;
  }


  function quantidadeItens(){
    return itens.length;
  }


  async function CarregarCarrinhoSolleil() {
    let carrinho = storage('carrinhosolleil')
    if (carrinho) {

      let temp = []

      for (let produto of carrinho) {
        let p = await listarProdutosIdCarrinho(produto.id);

        temp.push({
          produto: p,
          qtd: produto.qtd
        })
      }
      setItens(temp);
    }
  }



  useEffect(() => {
    CarregarCarrinhoSolleil();
  }, [])

  

  function removerItem(id) {


    let carrinho = storage('carrinhosolleil');
    carrinho = carrinho.filter(item => item.id != id);


    storage('carrinhosolleil', carrinho);
    CarregarCarrinhoSolleil();
  }




  return (
    <div className="c-1">
      <Cabecalho />
      <div className='s-1'>
        <p><b>MINHA SACOLA DE COMPRAS</b></p>


        {itens.map(item =>
          <CarrinhoProduto item={item} removerItem={removerItem} carregarCarrinhoSolleil={CarregarCarrinhoSolleil} />
        )}

      </div>
      <div className='s-2'>

        <div className='b-1'>itens: <b>{quantidadeItens()}</b></div>
        <div className='b-1'>valor total: <b>R$ {calcularValorTotal()}</b></div>
        <a href='/pagamento/cartao' className='b-3'><b>FINALIZAR COMPRA</b></a>
      </div>

      <Rodape />

    </div>


  );
}