import { useState } from 'react';
import CabecalhoAdm from '../../../components/cabecalhoAdm/index.js'
import './index.scss';

export default function Consulta() {
  const [codigo, setCodigo] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [status, setStatus] = useState('');
  const [id, setId] = useState('');
  const [marca, setMarca] = useState('');
  const [filtro, setFiltro] = useState('');
  const [desc, setDesc] = useState('');

  const limparCampos = () => {
    setCodigo('');
    setNomeProduto('');
    setCategoria('');
    setStatus('');
    setId('');
    setMarca('');
    setFiltro('');
    setDesc('');
  };


  
  return (
    <section className='index_consulta_produto'>
      <CabecalhoAdm />
      <header>
        <h1>Consulta de Produtos</h1>
      </header>
      <hr/>
      <div className='sec_1'>
        <div className='sec1_c1'>
          <div className='sec1c1-cx1'>
            <label>Código:</label>
            <input id='input' value={codigo} onChange={(e) => setCodigo(e.target.value)}/>
          </div>
          <div className='sec1c1-cx2'>
            <label>Nome do Produto:</label>
            <input id='input' value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)}/>
          </div>
        </div>
        <div className='sec1_c2'>
          <div className='sec1c2-cx1'>
            <label>Categoria:</label>
            <select id='select' value={categoria} onChange={(e) => setCategoria(e.target.value)}>
              <option disabled selected>Selecione</option>
            </select>
          </div>
          <div className='sec1c2-cx2'>
            <label>Status do Produto:</label>
            <input id='input' value={status} onChange={(e) => setStatus(e.target.value)}/>
          </div>
          <div className='sec1c2-cx3'>
            <label>ID do Usuário:</label>
            <input id='input' value={id} onChange={(e) => setId(e.target.value)}/>
          </div>
        </div>
        <div className='sec1_c3'>
          <div className='sec1c3-cx1'>
            <label>Marca:</label>
            <input id='input' value={marca} onChange={(e) => setMarca(e.target.value)}/>
          </div>
          <div className='sec1c3-cx2'>
            <label>Transportadora:</label>
            <input id='input'/>
          </div>
          <div className='sec1c3-cx3'>
            <label>Filtrar por preço:</label>
            <input id='input' value={filtro} onChange={(e) => setFiltro(e.target.value)}/>
          </div>
        </div>
        <div className='sec1_c4'>
          <div className='sec1c4-cx1'>
            <label>Descrição do Produto</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)}/>
          </div>
          <div className='sec1c4-botoes'>
            <button>Procurar</button>
            <button onClick={limparCampos}>Limpar Filtros</button>
          </div>
        </div>
      </div>
      <hr/>
      <div className='sec_2'>
        <header>
          <h3>Resultado:</h3>
        </header>
        <div>
          <h4>Sem resultados</h4>
        </div>
      </div>
    </section>
  );
}