import { useState, useEffect } from 'react';
import CabecalhoAdm from '../../../components/cabecalhoAdm/index.js'
import './index.scss';
import { listarCategorias, listarMarcas, listarProdutos } from '../../../api/getAPI.js';

export default function Consulta() {
  const [ProdutoS, setProdutoS] = useState([]);
  const [marcaS, setMarcaS ] = useState([]);
  const [categoriaS, setCategoriaS] = useState([]);
  const [Idcategoria, setIdCategoria] = useState(0);
  const [idMarca, setIdMarca] = useState(0);
  const [codigo, setCodigo] = useState(0);
  const [nomeProduto, setNomeProduto] = useState('');
  const [filtro, setFiltro] = useState('');
  const [desc, setDesc] = useState('');

  function limparCampos() {
    setCodigo(0);
    setNomeProduto('');
    setIdCategoria(0);
    setIdMarca(0);
    setFiltro('');
    setDesc('');
  };

  async function carregarProdutos() {
    const resp = await listarProdutos();
    setProdutoS(resp);
  };

  async function carregarMarcas() {
    const respo = await listarMarcas();
    setMarcaS(respo);
  }

  async function carregarCategorias() {
    const respo = await listarCategorias();
    setCategoriaS(respo)
  }

  useEffect(() => {
    carregarProdutos();
    carregarMarcas();
    carregarCategorias();
  }, []);



  return (


    <section className='index_consulta_produto'>
      <CabecalhoAdm />
      <header>
        <h1>Consulta de Produtos</h1>
      </header>
      <hr />
      <div className='sec_1'>

        <div className='sec1_c1'>

          <div className='sec1c1-cx1'>
            <label>Código:</label>
            <input id='input' value={codigo} onChange={(e) => setCodigo(e.target.value)} />
          </div>

          <div className='sec1c1-cx2'>
            <label>Nome do Produto:</label>
            <input id='input' value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
          </div>

        </div>

        <div className='sec1_c2'>

          <div className='sec1c2-cx1'>

            <div className='sim'>
              <label>Categoria:</label>
              <select id='select' value={Idcategoria} onChange={(e) => setIdCategoria(e.target.value)}>
                <option value={0}>Selecione</option>
                {categoriaS.map((item) => 
                  <option key={item.id} value={item.id}>{item.nome}</option>
                )}
              </select>
            </div>
            <div className='sim'>
              <label>Marca:</label>
              <select id='select' value={idMarca} onChange={(e) => setIdMarca(e.target.value)}>
                <option value={0}>Selecione</option>
                {marcaS.map((item) => 
                <option key={item.id} value={item.id}> {item.nome} </option>
                )}
              </select>
            </div>

            <div className='sim'>
              <label className='aha'>Filtrar por preço:</label>
              <input id='input' value={filtro} onChange={(e) => setFiltro(e.target.value)} />
            </div>

          </div>
        </div>

        <div className='sec1_c4'>

          <div className='sec1c4-cx1'>

            <label>Descrição do Produto</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />

          </div>
          <div className='sec1c4-botoes'>
            <button>Procurar</button>
            <button onClick={limparCampos}>Limpar Filtros</button>
          </div>
        </div>

      </div>
      <div className='sec_2'>
        <table>
          <thead>
            <tr>
              <th>Id:</th>
              <th>Nome:</th>
              <th>Categoria:</th>
              <th>Marca:</th>
              <th>Preço:</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ProdutoS.map((item) => 
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.categoria}</td>
                <td>{item.marca}</td>
                <td>{item.preco}</td>
                <td>
                  <button className='botao'>Editar</button>
                  <button className='botao'>Deletar</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}