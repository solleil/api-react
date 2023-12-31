import './index.scss';
import CabecalhoAdm from '../../../components/cabecalhoAdm/index.js'
import { useState, useEffect } from 'react';
import { listarCategorias, listarIngredientes, listarMarcas, listarNecessidades, listarTiposdePele } from '../../../api/getAPI';

export default function EditarProduto() {
  const [Marcas, setMarcas] = useState([]);
  const [Necessidades, setNecessidades] = useState([]);
  const [TiposPele, setTiposPele] = useState([]);
  const [IngrS, setIngrS] = useState([]);
  const [idCategoria, setIdCategoria] = useState([])
  const [nomeProduto, setNomeProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState(0);
  const [ingrediente, setIngrediente] = useState('');
  const [descri, setDescri] = useState(0);
  const [tipopele, setTipopele] = useState(0);
  const [estoque, setEstoque] = useState(true);
  const [tamanho, setTamanho] = useState('');
  const [qtd, setQtd] = useState(0);
  const [marca, setMarca] = useState(0);
  const [necess, setNecess] = useState(0);
  const [ingre_atv, setIngre_atv] = useState(0);
  const [indica, setIndica] = useState('');
  const [categoria, setCategoria] = useState(0)

  const removerdados = () => {
    setNomeProduto('')
    setPrecoProduto(0);
    setIngrediente('');
    setDescri('');
    setTipopele('');
    setEstoque('');
    setTamanho('');
    setQtd(0);
    setMarca('');
    setNecess('');
    setIndica('');
  };
  
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


  useEffect(() => {

    carregarNecessidades()

  }, [])

  useEffect(() => {

    carregarTiposPele();

  }, [])

  useEffect(() => {

    carregarMarcas();

  }, [])

  useEffect(() => {

    carregarIngredientes();

  }, [])

  useEffect(() => {
    carregarIdCategorias();
  }, [])

  return (
    <div className="index_editarProduto">
      <CabecalhoAdm className='cabecalho' />
      <div className='fundo_pagina'>
        <section className='sec_1'>
          <header className='sec1_header_Id'>
            <h1>Id do Produto: { }</h1>
          </header>
          <div className='sec1_tela-Editar-Remover'>
            <div className='info_produto'>
              <div className='info_exemplo_temporario'>
                <noscript><img src='' alt='' /></noscript>
                <h5>Imagem Produto</h5>
              </div>
              <div className='c1_tela'>
                <h3>Nome do Produto: { } </h3>
                <div className='c2_tela'>
                  <button>Editar</button>
                  <button>Remover Produto</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='sec_2'>
          <div className='sec2_container-1'>
            <div className='container1_c1'>
              <label>Nome Produto</label>
              <input type='text' value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)}></input>
              <label>Preço</label>
              <input type='text' value={precoProduto} onChange={(e) => setPrecoProduto(Number(e.target.value))}></input>
            </div>
            <div className='container1_c2'>
              <h2>Alterar Imagem</h2>
              <div className='tela_alterar_img'>
                <h5>Insira o produto</h5>
                <div className='tela_por_img'></div>
              </div>
            </div>
            <div className='container1_c3'>
              <label>Ingredientes</label>
              <textarea id='ingredientes' type='text' value={ingrediente} onChange={(e => setIngrediente(e.target.value))}></textarea>
            </div>
          </div>
          <div className='sec2_container-2'>
            <div className='container2_c1'>
              <label>Descrição</label>
              <textarea value={descri} onChange={(e) => setDescri(e.target.value)}></textarea>
            </div>
            <div className='container2_c2'>
              <div className='container2c2_categoria'>
                <label>Categoria</label>
                <select value={categoria} onChange={(e) => setCategoria(Number(e.target.value)) }>
                  <option value={0}>Selecionar</option>
                  {idCategoria.map(item => 
                    <option value={item.id}>{item.nome}</option>  
                  )}
                </select>
              </div>
              <div className='div_selects'>
                <div className='container2c2_coluna-1'>
                  <label>Tipo de pele</label>
                  <select className='tipopele' value={tipopele} onChange={(e) => setTipopele(Number(e.target.value))}>
                    <option value={0}>selecionar</option>
                    {TiposPele.map(item =>
                      <option value={item.id}>{item.nome}</option>
                    )}
                  </select>
                  <label>Tamanhos</label>
                  <select className='tamanhos' value={tamanho} onChange={(e) => setTamanho(e.target.value)}>
                    <option>selecionar</option>
                  </select>
                  <label>Marca</label>
                  <select value={marca} onChange={(e) => setMarca(Number(e.target.value))}>
                    <option value={0}>selecionar</option>
                    {Marcas.map(item => 
                      <option value={item.id}>{item.nome}</option>
                      )}
                  </select>
                </div>
                <div className='container2c2_coluna-2'>
                  <label>Estoque</label>
                  <select className='tipopele' value={estoque} onChange={(e) => setEstoque(e.target.value)}>
                    <option value={true}>Disponível</option>
                    <option value={false}></option>
                  </select>
                  <label>Quantidade</label>
                  <select className='tamanhos' value={qtd} onChange={(e) => setQtd(Number(e.target.value))}>
                    <option>selecionar</option>
                  </select>
                  <label>Necessidades</label>
                  <select value={necess} onChange={(e) => setNecess(Number(e.target.value))}>
                    <option value={0}>selecionar</option>
                    {Necessidades.map(item => 
                      <option value={item.id}>{item.nome}</option>
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className='container2_c3'>
              <div className='container2c3_bloco-1'>
                <label>Ingredientes Ativos</label>
                <select value={ingre_atv} onChange={(e) => setIngre_atv(Number(e.target.value))}>
                  <option value={0}>selecionar</option>
                  {IngrS.map(item => 
                    <option value={item.id}>{item.nome}</option>
                  )}
                </select>
              </div>
              <div className='container2c3_bloco-2'>
                <label>Indicações</label>
                <textarea value={indica} onChange={(e) => setIndica(e.target.value)}></textarea>
              </div>
            </div>
          </div>
        </section>
        <div className='div_botoes'>
          <button id='botao' onClick={removerdados}>Excluir Dados</button>
          <button id='botao'>Confirmar Alteração</button>
        </div>
      </div>
    </div>
  );
}