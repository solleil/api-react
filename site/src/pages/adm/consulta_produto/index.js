import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { confirmAlert } from 'react-confirm-alert'; 
import CabecalhoAdm from '../../../components/cabecalhoAdm/index.js'
import './index.scss';
import { listarProdutosConsulta, listarProdutosInner } from '../../../api/getAPI.js';
import { deletarProduto } from '../../../api/deleteAPI.js';

export default function Consulta() {
  const [ProdutoS, setProdutoS] = useState([]);
  const [codigo, setCodigo] = useState(0);
  const [nomeProduto, setNomeProduto] = useState('');

  const navigate = useNavigate();

  function limparCampos() {
    setCodigo(0);
    setNomeProduto('');
  };

  async function filtrar() {
    if (codigo && nomeProduto) {
      const qry = `nome=${nomeProduto}&id=${codigo}`;
      const respo = await listarProdutosConsulta(qry);
      setProdutoS(respo);
    }
    else {
      if (codigo) {
        const qry = `id=${codigo}`;
        const respo = await listarProdutosConsulta(qry);
        setProdutoS(respo);
      }
      else {
        const qry = `nome=${nomeProduto}`;
        const respo = await listarProdutosConsulta(qry);
        setProdutoS(respo);
      }
    }
  }

  function navPagEditar(id) {
    navigate(`/alterar/produto/${id}`)
  }

  async function deletar(id) {
    await deletarProduto(id);
    carregarProdutos()
  }

  async function carregarProdutos() {
    const resp = await listarProdutosInner();
    setProdutoS(resp);
  };


  useEffect(() => {
    carregarProdutos();
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
            <input id='input' value={codigo} onChange={(e) => setCodigo(Number(e.target.value))} />
          </div>

          <div className='sec1c1-cx2'>
            <label>Nome do Produto:</label>
            <input id='input' value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
          </div>

        </div>
        <div className='sec1_c4'>
          <div className='sec1c4-botoes'>
            <button onClick={filtrar}>Procurar</button>
            <button onClick={limparCampos}>Limpar Filtros</button>
          </div>
        </div>

      </div>
      <div className='sec_2'>
        
        <table>
          <thead>
            <tr>
              <th>Código:</th>
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
                <td>{item.nome_categoria}</td>
                <td>{item.nome_marca}</td>
                <td>R${item.preco}</td>
                <td>
                  {item.id !== 0 &&
                    <>
                    <div className='botoes'>
                      <button className='botao' onClick={() => navPagEditar(item.id)}>Editar</button>
                      <button className='botao' onClick={deletar}>Deletar</button>
                    </div>

                    </>}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}