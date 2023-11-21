import './index.scss';
import Rodape from '../../../../components/rodape';
import Cabecalho from '../../../../components/cabecalho';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { listarProdutosId } from '../../../../api/getAPI';
import CarrinhoProduto from '../../../../components/carrinhoproduto';

export default function Carrinho() {
  const [itens, setItens] = useState([]);
  console.log(itens)


  async function CarregarCarrinhoSolleil() {
    let carrinho = storage('carrinhosolleil')
    if (carrinho) {

      let temp = []

      for (let produto of carrinho) {
        let p = await listarProdutosId(produto.id);

        temp.push({
          produto: p,
          qtd: produto.quantidade
        })
      }
      setItens(temp);
    }
  }



  useEffect(() => {
    CarregarCarrinhoSolleil();
  }, [])

  function removerItem(id){
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
      <Rodape />
    </div>
  );
}