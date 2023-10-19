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
            <div className=''>
              <a href='a'><img alt='a' src='/assets/images/usuario/inicial/biossance.png' /></a>
              <a href='a'><img alt='a' src='/assets/images/usuario/inicial/cerave.png' /></a>
              <a href='a'><img alt='a' src='/assets/images/usuario/inicial/creamy.png' /></a>
              <a href='a'><img alt='a' src='/assets/images/usuario/inicial/laroche.png' /></a>
              <a href='a'><img alt='a' src='/assets/images/usuario/inicial/sallve.png' /></a>
              <a href='a'><img alt='a' src='/assets/images/usuario/inicial/simple.png' /></a>
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
          <div className='contmeio_container-2'>
            <header className='titulo_avaliacoes'>
              <h2> <img src='assets/images/geral/estrela.svg' alt='oi'/> Avaliações </h2>
            </header>
            <div className='tela_avaliacao'>
              <h3>Sem avaliações</h3>
            </div>
          </div>
        </section>
        <section className='rank_produtos'>
        <h2>Melhores Avaliações!</h2>
         <div className='rankP'>
          <div id='ranqueado'>
            <h6>1º</h6>
            <div className='rp_produto'>
              <img src='assets/images/usuario/inicial/produto.png' alt='0'/>
              <h3>Limpador Facial </h3>
            </div>
            <h5><img src='assets/images/geral/estrela.svg' alt='a' /> 5.0</h5>
          </div>
          <div id='ranqueado'>
            <h6>2º</h6>
            <div className='rp_produto'>
              <img src='assets/images/usuario/inicial/produto.png' alt='0'/>
              <h3>Limpador Facial </h3>
            </div>
              <h5><img src='assets/images/geral/estrela.svg' alt='a' /> 5.0</h5>
          </div>
          <div id='ranqueado'>
            <h6>3º</h6>
            <div className='rp_produto'>
              <img src='assets/images/usuario/inicial/produto.png' alt='0'/>
              <h3>Limpador Facial </h3>
            </div>
            <h5>  <img src='assets/images/geral/estrela.svg' alt='a' /> 5.0</h5>
          </div>
         </div>
        </section>
      </div>
    </div>
  );
}