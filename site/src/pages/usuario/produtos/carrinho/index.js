import './index.scss';
import Rodape from '../../../../components/rodape';
import Cabecalho from '../../../../components/cabecalho';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { listarProdutosId } from '../../../../api/getAPI';
import CarrinhoProduto from '../../../../components/carrinhoproduto';

export default function Carrinho() {
  const [itens, setItens] = useState([]);



  async function CarregarCarrinhoSolleil() {
    let carrinho = storage('carrinhosolleil')
    if (carrinho) {

      let temp = []

      for (let produto of carrinho) {
        let p = await listarProdutosId(produto.id);

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




  return (
    <div className="c-1">
      <Cabecalho />
      <div className='s-1'>
        <p><b>MINHA SACOLA DE COMPRAS</b></p>


        {itens.map(item =>
          <CarrinhoProduto/>
          )}

      </div>

      <div className='s-2'>

        <div className='b-1'>valor total: <b>R$20,00</b></div>
        <button className='b-3'><b>FINALIZAR COMPRA</b></button>
      </div>
      <Rodape />
    </div>
  );
}