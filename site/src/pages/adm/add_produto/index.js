import './index.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CabecalhoAdm from '../../../components/cabecalhoAdm';
import { listarCategorias, listarMarcas, listarNecessidades, listarTiposdePele, listarIngredientes, listarProdutosId } from '../../../api/getAPI.js';
import { AdicionarProduto } from '../../../api/postAPi';
import { editarProduto, enviarImagem } from '../../../api/putAPI.js';
import { api_url } from '../../../constats.js';


export default function AddProduto() {
  const [Marcas, setMarcas] = useState([]);
  const [Necessidades, setNecessidades] = useState([]);
  const [TiposPele, setTiposPele] = useState([]);
  const [IngrS, setIngrS] = useState([]);
  const [idCategoria, setIdCategoria] = useState([])
  const [categoria, setCategoria] = useState(0);
  const [nomeProduto, setNomeProduto] = useState('');
  const [ingrediente, setIngrediente] = useState('');
  const [descri, setDescri] = useState('');
  const [precoProduto, setPreco] = useState(0)
  const [tipopele, setTipopele] = useState(0);
  const [estoque, setEstoque] = useState(true);
  const [tamanho, setTamanho] = useState('');
  const [qtd, setQtd] = useState(0);
  const [idMarca, setIdMarca] = useState(0);
  const [necess, setNecess] = useState(0);
  const [ingre_atv, setIngre_atv] = useState(0);
  const [indica, setIndica] = useState('');
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [result, setResult] = useState(1);
  const [imagem, setImagem] = useState('');
  const [carregando, setCarregando] = useState(false);

  const { idParams } = useParams();

  function mais() {
    const x = qtd + 1;
    setQtd(x);
  };

  function menos() {
    if (qtd > 0) {
      const x = qtd - 1;
      setQtd(x);
    };
  };

  function removerdados() {
    setNomeProduto('')
    setPreco(0);
    setIngrediente('');
    setDescri('');
    setTipopele('');
    setEstoque('');
    setTamanho('');
    setQtd(0);
    setIdMarca('');
    setNecess('');
    setIndica('');
  }

  async function produtoEditAdd() {
    setCarregando(true)
    try {
     if (!idParams) {
      const respo = await AdicionarProduto(nomeProduto, ingrediente, descri, precoProduto, tipopele, estoque, tamanho, qtd, idMarca, necess, ingre_atv, indica, categoria);
      await enviarImagem(respo.insertId, imagem);
      toast.success("Produto cadastrado");
      setCarregando(false)}
      else {
        await editarProduto(nomeProduto, ingrediente, descri, precoProduto, tipopele, estoque, tamanho, qtd, idMarca, necess, ingre_atv, indica, categoria, idParams)
        await enviarImagem(idParams, imagem);
        toast.success("Produto editado");
        setCarregando(false)
      }
    } catch (err) {
      setCarregando(false);
      toast.error(err.message);
    }
  }

  async function carregarIdCategorias() {
    const resp = await listarCategorias();
    setIdCategoria(resp)
  };

  async function carregarMarcas() {
    const resp = await listarMarcas();
    setMarcas(resp);
  }

  async function carregarNecessidades() {
    const resp = await listarNecessidades();
    setNecessidades(resp);
  }

  async function carregarTiposPele() {
    const resp = await listarTiposdePele();
    setTiposPele(resp);
  }

  async function carregarIngredientes() {
    const resp = await listarIngredientes();
    setIngrS(resp);
  }

  async function carregarProdutosId() {
    const respo = await listarProdutosId(idParams)
    setNomeProduto(respo.nome)
    setDescri(respo.descricao)
    setIndica(respo.indicacao)
    setIngrediente(respo.ingrediente)
    setTamanho(respo.tamanho)
    setPreco(respo.preco)
    setQtd(respo.quantidade)
    setImagem(respo.imagem)
  }

  useEffect(() => {
    carregarNecessidades();
    carregarTiposPele();
    carregarMarcas();
    carregarIngredientes();
    carregarIdCategorias();
    if (idParams) {
      carregarProdutosId()
    }
  }, [])


  function EscolherImagem() {
    document.getElementById('imagem-recolher').click();
  }

  function mostrarImagem() {
    if (typeof(imagem) === 'object') {
      return URL.createObjectURL(imagem)
    }
    else {
      return `${api_url}/${imagem}`
    }
  }

  return (
    <div className="index_AddProduto">
      <CabecalhoAdm className='cabecalho' />
      <div className='titulo'>
        {!idParams && <p>Adicionar novo produto</p>}
        {idParams && <p>Editar produto</p>}
      </div>
      <div id='linha'></div>
      <div className='fundo_pagina'>
        <section className='sec_1'>
          <div className='sec1_tela-Editar-Remover'>
          </div>
        </section>
        <section className='sec_2'>
          <div className='sec2_container-1'>
            <div className='container1_c1'>
              <label>Nome Produto</label>
              <input type='text' value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)}></input>
              <label>Preço</label>
              <input type='text' value={precoProduto} onChange={(e) => setPreco(Number(e.target.value))}></input>
            </div>
            <div className='container1_c2'>
              {!idParams && <h2>Inserir Imagem</h2>}
              {idParams && <h2>Edite a Imagem</h2>}
              <div className='tela_alterar_img' onClick={EscolherImagem}>
                <input type="file" className='input-imagem' id='imagem-recolher' onChange={(e) => setImagem(e.target.files[0])} />
                {!imagem && <h3>Insira uma Imagem!</h3>} 
                {imagem && <img src={mostrarImagem()} alt="Imagem" className="imagem-preview" />}
              </div>
            </div>
            <div className='container1_c3'>

              <label>Ingredientes</label>
              <input type='text' value={ingrediente} onChange={e => setIngrediente(e.target.value)}></input>

            </div>

            <div className='container2c3_bloco-2'>
                <label>Indicações</label>
                <textarea value={indica} onChange={(e) => setIndica(e.target.value)} />
              </div>
            <button className='botao' onClick={removerdados}>Limpar Dados</button>
          </div>
          <div className='sec2_container-2'>
            <div className='container2_c1'>

              <label>Descrição</label>
              <textarea value={descri} onChange={e => setDescri(e.target.value)}></textarea>

            </div>
            <div className='container2_c2'>
              <div className='container2c2_coluna-1'>

                <label>Tipo de pele</label>
                <select className='tipopele' value={tipopele} onChange={(e) => setTipopele(Number(e.target.value))}>
                  <option value={0}> selecione </option>
                  {TiposPele.map(item =>
                    <option key={item.id} value={item.id}>{item.nome}</option>
                  )};
                </select>

                <label>Tamanhos</label>
                <input type='text' value={tamanho} onChange={(e) => setTamanho(e.target.value)} className='oi' />

                <label>Marca</label>
                <select value={idMarca} onChange={(e) => setIdMarca(Number(e.target.value))}>
                  <option> selecione </option>
                  {Marcas.map(item =>
                    <option key={item.id} value={item.id}>{item.nome}</option>
                  )};
                </select>

              </div>
              <div className='container2c2_coluna-2'>

                <label>Estoque</label>
                <select className='tipopele' value={estoque} onChange={(e) => setEstoque(Boolean(e.target.value))}>
                  <option value={1}>Sim</option>
                  <option value={0}>Não</option>
                </select>

                <label>Quantidade</label>
                <div className='qtd-info'>
                  <button className='contador' type='number' value={n1} onChange={(e) => setN1(Number(e.target.value))} onClick={menos}> <img src='/assets/images/geral/-.png' alt='a' /></button>
                  <p value={qtd} onChange={(e) => setResult(Number(e.target.value))}> {qtd}</p>
                  <button className='contador' type='number' value={n2} onChange={(e) => setN2(Number(e.target.value))} onClick={mais}> <img src='/assets/images/geral/+.png' alt='' /></button>
                </div>

                <label>Necessidades</label>
                <select value={necess} onChange={(e) => setNecess(Number(e.target.value))}>
                  <option value={0}> selecione </option>
                  {Necessidades.map(item =>
                    <option key={item.id} value={item.id}>{item.nome}</option>
                  )};
                </select>
              </div>
            </div>
            <div className='container2_c3'>
              <div className='container2c3_bloco-1'>

                <label>Ingredientes Ativos</label>
                <select value={ingre_atv} onChange={(e) => setIngre_atv(Number(e.target.value))}>
                  <option value={0}> selecione </option>
                  {IngrS.map(item =>
                    <option key={item.id} value={item.id}>{item.nome}</option>
                  )};
                </select>
                <label>categorias</label>
                <select value={categoria} onChange={(e) => setCategoria(Number(e.target.value))}>
                  <option value={0}>selecione</option>
                  {idCategoria.map(item =>
                    <option key={item.id} value={item.id}>{item.nome}</option>
                  )}
                </select>
              </div>
              
            </div>
            {!idParams && <button className='botao' onClick={produtoEditAdd} disabled={carregando}>Confirmar Cadastro</button>}
            {idParams && <button className='botao' onClick={produtoEditAdd} disabled={carregando}>Confirmar Edição</button>}
          </div>
        </section>
      </div>
    </div>
  );
}