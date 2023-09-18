import Cabecalho from '../../../components/cabecalho';
import './index.scss';

export default function AlterarProduto() {
  return (
    <div className="pag-alt-produto">
      <Cabecalho/>
     <div className='tud'>
    <div className='consulta'>
      <h1 className='pa'>Consulta de Produtos</h1>
      <div className='linha'></div>
      <div className='c'>
      <div className='f-1'>
        <label>Código:</label>
        <input type='text'></input>
        <label>Nome do Produto:</label>
        <input type='text'></input>
      </div>
      <div className='f-2'>

        <label>Categoria:</label>
        
        <select className='select'>
        <option>selecionar</option>
        </select>

        <label>Status do Produto:</label>
        <input type='text'></input>

        <label>ID do Usuário:</label>
        <input type='text'></input>
        </div>

        <div className='meio'>

        <label>Marca/Fornecedor:</label>
        <input type='text'></input>
        <label>Transportadora</label>
        <input type='text'></input>
        <label>Filtrar por preço:</label>
        <input type='text'></input>
        </div>
      
      <div className='f-3'>

        <div className='info'>
        <label></label>
        <input type='text'></input>
        </div>

        <div className='botaos'>
          <button>Procurar</button>
          <button>Excluir produto</button>
        </div>
      </div>

      </div>
    </div>
     </div>
    </div>
  );
}