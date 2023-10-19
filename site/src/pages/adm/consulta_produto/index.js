import CabecalhoAdm from '../../../components/cabecalhoAdm/index.js'
import './index.scss';


export default function Consulta() {
  return (
    <section className='index_consulta_produto'>
      <CabecalhoAdm />
      <header>
        <h1>Consulta de Produtos</h1>
        <hr />
      </header>
      <div className='sec_1'>
        <div className='sec1_c1'>
          <div className='sec1c1-cx1'>
            <label>Código:</label>
            <input id='input'/>
          </div>
          <div className='sec1c1-cx2'>
            <label>Nome do Produto:</label>
            <input id='input'/>
          </div>
        </div>
        <div className='sec1_c2'>
          <div className='sec1c2-cx1'>
            <label>Categoria:</label>
            <input id='input'/>
          </div>
          <div className='sec1c2-cx2'>
            <label>Status do Produto:</label>
            <input id='input'/>
          </div>
          <div className='sec1c2-cx3'>
            <label>ID do Usuário:</label>
            <input id='input'/>
          </div>
        </div>
        <div className='sec1_c3'>
          <div className='sec1c3-cx1'>
            <label>Marca:</label>
            <input id='input'/>
          </div>
          <div className='sec1c3-cx2'>
            <label>Transportadora:</label>
            <input id='input'/>
          </div>
          <div className='sec1c3-cx3'>
            <label>Filtrar por preço:</label>
            <input id='input'/>
          </div>
        </div>
        <div className='sec1_c4'>
          <div className='sec1c4-cx1'>
            <label>Descrição do Produto</label>
            <textarea/>
          </div>
          <div>
            <button>Procurar</button>
            <button>Limpar Filtros</button>
          </div>
        </div>
      </div>
    </section>
  );
}