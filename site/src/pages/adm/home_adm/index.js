import './index.scss';
import CabecalhoAdm from '../../../components/cabecalhoAdm/index.js'
import { Link } from 'react-router-dom';

export default function Inicialadm() {
  return (
    <div className="index_inicial_adm">
      <CabecalhoAdm/>
      <div className='fundo' >
        <section className='menu_navegacao'>
          <div className='menunav_container-1'>
            <div id='link_menu'>
              <Link to={'0'}>Menu</Link>
            </div>
            <div id='link_menu'>
              <Link to={'0'}>Projetos</Link>
            </div>
            <div id='link_menu'>
              <Link to={'0'}>Calendário</Link>
            </div>
            <div id='link_menu'>
              <Link to={'0'}>Gráficos</Link>
            </div>
          </div>
          <div className='menunav_container-2'>
            <h1>Produtos</h1>
            <div id='link_menu'>
              <Link to={'/addproduto'}>Adicionar Produtos</Link>
            </div>
            <div id='link_menu'>
              <Link to={'0'}>Pedidos Concluídos</Link>
            </div>
            <div id='link_menu'>
              <Link to={'/editarproduto'}>AlterarProduto</Link>
            </div>
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
          <div className='container-1_perfil_admim'>
            <div className='imagem_perfil'>
              <img src='/assets/images/geral/perfil.png' alt=''/>
            </div>
            <div className='info_admim'>
              <h2>User</h2>
              <h3>Developer</h3>
              <h3>São Paulo, São Paulo</h3>
            </div>
          </div>
          <div className='container-2_outros_admim'>
            <h3>Ninguem On-Line</h3>
          </div>
        </section>
      </div>
    </div>
  );
}