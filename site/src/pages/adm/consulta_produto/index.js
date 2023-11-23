import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import CabecalhoAdm from '../../../components/cabecalhoAdm/index.js'
import './index.scss';
import { listarCategorias, listarMarcas, listarProdutosConsulta, listarProdutosInner } from '../../../api/getAPI.js';
import { deletarProduto } from '../../../api/deleteAPI.js';

export default function Consulta() {
  const [ProdutoS, setProdutoS] = useState([]);
  const [marcaS, setMarcaS] = useState([]);
  const [categoriaS, setCategoriaS] = useState([]);
  const [Idcategoria, setIdCategoria] = useState(0);
  const [idMarca, setIdMarca] = useState(0);
  const [codigo, setCodigo] = useState(0);
  const [nomeProduto, setNomeProduto] = useState('');
  const [preco, setPreco] = useState();
  const [desc, setDesc] = useState('');

  const navigate = useNavigate();

  function limparCampos() {
    setCodigo(0);
    setNomeProduto('');
    setIdCategoria(0);
    setIdMarca(0);
    setPreco(0);
    setDesc('');
  };

  async function Filtro() {
    if (!nomeProduto && !codigo && !Idcategoria && !idMarca && !preco) {
      carregarProdutos()
    };
    if (nomeProduto && codigo && Idcategoria && idMarca && preco) {
      const query = `nome=${nomeProduto}$id=${codigo}&categoria=${Idcategoria}&marca=${idMarca}&preco=${preco}`;
      const respo = await listarProdutosConsulta(query);
      setProdutoS(respo)
    }
    else {
      if (nomeProduto) {
        if (desc) {
          const query = `nome=${nomeProduto}&desc=${desc}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        }
        else if (codigo) {
          const query = `nome=${nomeProduto}&id=${codigo}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        }
        else if (Idcategoria) {
          const query = `nome=${nomeProduto}&categoria=${Idcategoria}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        }
        else if (idMarca) {
          const query = `nome=${nomeProduto}&marca=${idMarca}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        }
        else if (preco) {
          const query = `nome=${nomeProduto}&preco=${preco}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        }
        else {
          const query = `nome=${nomeProduto}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        }
      }
      else if (desc) {
        if (codigo) {
          const query = `desc=${desc}&id=${codigo}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        }
        else if (Idcategoria) {
          const query = `desc=${desc}&categoria=${Idcategoria}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        }
        else if (idMarca) {
          const query = `desc=${desc}&marca=${idMarca}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        }
        else if (preco) {
          const query = `desc=${desc}&preco=${preco}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        }
        else {
          const query = `desc=${desc}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        } 
      }
      else if (codigo) {
        if (Idcategoria) {
          const query = `id=${codigo}&categoria=${Idcategoria}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        }
        else if (idMarca) {
          const query = `id=${codigo}&marca=${idMarca}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        }
        else if (preco) {
          const query = `id=${codigo}&preco=${preco}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        }
        else {
          const query = `id=${codigo}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        } 
      }
      else if (Idcategoria) {
        if (idMarca) {
          const query = `categoria=${Idcategoria}&marca=${idMarca}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        }
        else if (preco) {
          const query = `categoria=${Idcategoria}&preco=${preco}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        }
        else {
          const query = `categoria=${Idcategoria}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        } 
      }
      else if (idMarca) {
        if (preco) {
          const query = `marca=${idMarca}&preco=${preco}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo);
        }
        else {
          const query = `marca=${idMarca}`;
          const respo = await listarProdutosConsulta(query);
          setProdutoS(respo)
        } 
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
            <input id='input' value={codigo} onChange={(e) => setCodigo(Number(e.target.value))} />
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
              <select id='select' value={Idcategoria} onChange={(e) => setIdCategoria(Number(e.target.value))}>
                <option value={0}>Selecione</option>
                {categoriaS.map((item) =>
                  <option key={item.id} value={item.id}>{item.nome}</option>
                )}
              </select>
            </div>
            <div className='sim'>
              <label>Marca:</label>
              <select id='select' value={idMarca} onChange={(e) => setIdMarca(Number(e.target.value))}>
                <option value={0}>Selecione</option>
                {marcaS.map((item) =>
                  <option key={item.id} value={item.id}> {item.nome} </option>
                )}
              </select>
            </div>

            <div className='sim'>
              <label className='aha'>Filtrar por preço:</label>
              <input id='input' value={preco} onChange={(e) => setPreco(Number(e.target.value))} />
            </div>

          </div>
        </div>

        <div className='sec1_c4'>

          <div className='sec1c4-cx1'>

            <label>Descrição do Produto</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />

          </div>
          <div className='sec1c4-botoes'>
            <button onClick={Filtro}>Procurar</button>
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