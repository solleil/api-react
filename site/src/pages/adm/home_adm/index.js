import './index.scss';
import CabecalhoAdm from '../../../components/cabecalhoAdm/index.js'


export default function Inicialadm() {

  return (

    <div className="index_inicial_adm">
      <CabecalhoAdm />  
      <div className='fundo' >

        <section className='rank_marcas'>
            <div className='titulo_marcas'>
              <p>Parcerias</p>
            </div>
            <div className='parcerias'>
              <a href='https://www.sephora.com.br/biossance/'><img alt='a' src='/assets/images/usuario/inicial/biossance.png' /></a>
              <a href='https://www.cerave.com.br/'><img alt='a' src='/assets/images/usuario/inicial/cerave.png' /></a>
              <a href='https://www.creamy.com.br/'><img alt='a' src='/assets/images/usuario/inicial/creamy.png' /></a>
              <a href='https://www.laroche-posay.com.br/'><img alt='a' src='/assets/images/usuario/inicial/laroche.png' /></a>
              <a href='https://www.sallve.com.br/'><img alt='a' src='/assets/images/usuario/inicial/sallve.png' /></a>
              <a href='https://simpleorganic.com.br/'><img alt='a' src='/assets/images/usuario/inicial/simple.png' /></a>
              
            </div>
        </section>
        <section className='conteudo_meio'>
          <div className='contmeio_container-1'>
            <div className='contmeioc1_subcontainer-1'>
              <div className='infoProduto'>
                <h2><b>Produto mais faturado</b></h2>
                <h3>SOLUÇÃO NIACINAMIDA</h3>
                <h6>Simple organic</h6>
              </div>
              <img src='/assets/images/adm/inicial_adm/produto_mais_vendido.png' alt='' />
            </div>
            <div className='contmeioc1_subcontainer-2'>
              <img src='/assets/images/adm/inicial_adm/grafico_produto.png' alt='' />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}