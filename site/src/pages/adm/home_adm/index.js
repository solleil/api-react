import './index.scss';
import CabecalhoAdm from '../../../components/cabecalhoAdm/index.js'


export default function Inicialadm() {
  return (
    <div className="index_inicial_adm">
      <CabecalhoAdm/>
      <div className='fundo' >


        <section className='menu_navegacao'>
          <div className='s1'>
            <p>Parcerias</p>

            <a href='a'><img alt='' src='/assets/images/usuario/inicial/biossance.png' /></a>
            <a href='a'><img alt='' src='/assets/images/usuario/inicial/cerave.png' /></a>
            <a href='a'><img alt='' src='/assets/images/usuario/inicial/creamy.png' /></a>
            <a href='a'><img alt='' src='/assets/images/usuario/inicial/laroche.png' /></a>
            <a href='a'><img alt='' src='/assets/images/usuario/inicial/sallve.png' /></a>
            <a href='a'><img alt='' src='/assets/images/usuario/inicial/simple.png' /></a>
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
              <img src='/assets/images/adm/inicial_adm/produto_mais_vendido.png' alt=''/>
            </div>
            <div className='contmeioc1_subcontainer-2'>
              <img src='/assets/images/adm/inicial_adm/grafico_produto.png' alt=''/>
            </div>
          </div>
          <div className='contmeio_container-2'>
            <header>
              <h2>Avaliações</h2>
            </header>
            <div className='avaliacoes'>
              <h3>Sem avaliações</h3>
            </div>
          </div>
        </section>


        <section className='menu_admins'>
          <div className='s2'>
              <p>Melhores avaliações</p>

              <div className='s2-1'>
                <p>1º</p>
                <div className='s6-1-p'><img src='/assets/images/usuario/inicial/produto.png' alt='' />
                  <p>Limpador Facial</p>  
              
                </div>
                <b>avaliação</b>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}