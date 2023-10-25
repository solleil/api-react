import './index.scss';

import { useState, useEffect } from 'react';

import CabecalhoAdm from '../../../components/cabecalhoAdm';


import { salvarInfos, listarMarcas, listarNecessidades, listarTiposdePele, listarIngredientes } from '../../../api/salvarinfo.js';



export default function AddProduto() {

  const [adicionarproduto, setAdicionarproduto] = useState('')
  const [categoriaMarca, setCategoriaMarca] = useState([]);
  const [categoriaNecessidade, setCategoriaNecessidade] = useState([]);
  const [categoriaTiposDePele, setCategoriaTiposDePele] = useState([]);
  const [nomeIngrediente, setNomeIngrediente] = useState([]);

  const [nomeProduto, setNomeProduto] = useState('');
  const [ingrediente, setIngrediente] = useState('');
  const [descri, setDescri] = useState('');
  const [precoProduto, setPreco] = useState(0)
  const [tipopele, setTipopele] = useState(0);
  const [estoque, setEstoque] = useState(1);
  const [tamanho, setTamanho] = useState('');
  const [qtd, setQtd] = useState(0);
  const [idMarca, setIdMarca] = useState(0);
  const [necess, setNecess] = useState(0);
  const [ingre_atv, setIngre_atv] = useState(0);
  const [indica, setIndica] = useState('');
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [result, setResult] = useState(1);
  const [imagem, setImagem] = useState('')


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

  function dispEstoque() {
    setEstoque(0);
  }

  const removerdados = () => {
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


  async function Salvarinfo() {
    try {
      const r = await salvarInfos(nomeProduto,
        descri,
        tipopele,
        precoProduto,
        estoque,
        tamanho,
        idMarca,
        necess,
        ingre_atv,
        indica);
      alert('Informações salvas')

    }

    catch (err) {
      alert(err.response.data.erro)
    }

  }

  async function carregarMarcas() {
    const resp = await listarMarcas();
    setCategoriaMarca(resp);
  }


  async function carregarTiposPele() {
    const resp = await listarTiposdePele();
    setCategoriaTiposDePele(resp);
  }

  async function carregarIngredientes() {
    const resp = await listarIngredientes();
    setNomeIngrediente(resp);
  }

  async function carregarNecessidades() {
    const resp = await listarNecessidades();
    setCategoriaNecessidade(resp);

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





  const ImagemA = (event) => {
    const arquivoSelecionado = event.target.files[0];
    setImagem(URL.createObjectURL(arquivoSelecionado));
  };

  return (
    <div className="index_AddProduto">
      <CabecalhoAdm className='cabecalho' />
      <div className='titulo'>
        <p>Adicionar novo produto</p>

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
              <h2>Alterar Imagem</h2>
              <div className='tela_alterar_img'>
                <input type="file" accept="image/*" className='input-imagem' onChange={ImagemA} />
                <img
                  src={imagem} alt="Imagem" className="imagem-preview" />
                <div className='tela_por_img'></div>
              </div>
            </div>
            <div className='container1_c3'>
              <label>Ingredientes</label>
              <input type='text' value={ingrediente} onChange={e => setIngrediente(e.target.value)}></input>
            </div>
            <button id='botao' onClick={removerdados}>Excluir Dados</button>
          </div>
          <div className='sec2_container-2'>
            <div className='container2_c1'>
              <label>Descrição</label>
              <textarea value={descri} onChange={e => setDescri(e.target.value)}></textarea>
            </div>
            <div className='container2_c2'>
              <div className='container2c2_coluna-1'>
                <label>Tipo de pele</label>
                <select className='tipopele' value={tipopele} onChange={(e) => setTipopele(e.target.value)}>
                  {categoriaTiposDePele.map(item =>
                    <>
                      <option value={item.id}>{item.nome}</option>
                    </>
                  )};
                </select>
                <label>Tamanhos</label>
                <input type='number' value={tamanho} onChange={(e) => setTamanho(e.target.value)} className='oi' />

                <label>Marca</label>
                <select value={idMarca} onChange={(e) => setIdMarca(e.target.value)}>
                  {categoriaMarca.map(item =>

                    <option value={item.id}>{item.nome}</option>

                  )};
                </select>
              </div>
              <div className='container2c2_coluna-2'>
                <label>Estoque</label>
                <select className='tipopele' value={estoque} onChange={e => setEstoque(e.target.value)}>
                  <option>disponível</option>
                  <option value={estoque}>Sim</option>
                  <option onClick={dispEstoque}>Não</option>
                </select>



                <label>Quantidade</label>


                <div className='qtd-info'>
                  <button className='contador' type='number' value={n1} onChange={(e) => setN1(Number(e.target.value))} onClick={menos}> <img src='/assets/images/geral/-.png' alt='a' /></button>
                  <p value={qtd} onChange={(e) => setResult(Number(e.target.value))}> {qtd}</p>
                  <button className='contador' type='number' value={n2} onChange={(e) => setN2(Number(e.target.value))} onClick={mais}> <img src='/assets/images/geral/+.png' alt='' /></button>
                </div>


                <label>Necessidades</label>
                <select value={necess} onChange={(e) => setNecess(e.target.value)}>
                  <option value={0}> selecione </option>
                  {categoriaNecessidade.map(item =>

                    <option value={item.id}>{item.nome}</option>
                    
                  )};

                </select>
              </div>
            </div>
            <div className='container2_c3'>
              <div className='container2c3_bloco-1'>
                <label>Ingredientes Ativos</label>
                <select value={ingre_atv} onChange={(e) => setIngre_atv(e.target.value)}>
                  <option>
                  </option>
                  {nomeIngrediente.map(item =>
                    <option value={item.id}>{item.nome}</option>
                  )};
                </select>
              </div>
              <div className='container2c3_bloco-2'>
                <label>Indicações</label>
                <textarea value={indica} onChange={(e) => setIndica(e.target.value)} />
              </div>
            </div>
            <button id='botao' onClick={Salvarinfo}>Confirmar Cadastro</button>
          </div>
        </section>
      </div>
    </div>
  );
}