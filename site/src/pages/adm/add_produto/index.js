import './index.scss';

import { useState, useEffect } from 'react';

import CabecalhoAdm from '../../../components/cabecalhoAdm';

import axios from 'axios';



export default function AddProduto() {
  const [adicionarproduto, setAdicionarproduto] = useState('')


  const [nomeProduto, setNomeProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState(0);
  const [ingrediente, setIngrediente] = useState('');
  const [descri, setDescri] = useState('');
  const [tipopele, setTipopele] = useState('');
  const [estoque, setEstoque] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [qtd, setQtd] = useState(0);
  const [marca, setMarca] = useState('');
  const [necess, setNecess] = useState('');
  const [ingre_atv, setIngre_atv] = useState('');
  const [indica, setIndica] = useState('');

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
  }


  async function conexao() {
    let url = 'http://localhost:5000/produto'
    let resp = await axios.put(url);
    setAdicionarproduto(resp.data)
  }

  useEffect(() => {

    conexao();
  }, [])



  return (
    <div className="index_AddProduto">
      <CabecalhoAdm className='cabecalho'/>
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
              <input type='text' value={ingrediente} onChange={(e => setIngrediente(e.target.value))}></input>
            </div>
            <button id='botao' onClick={removerdados}>Excluir Dados</button>
          </div>
          <div className='sec2_container-2'>
            <div className='container2_c1'>
              <label>Descrição</label>
              <textarea value={descri} onChange={(e) => setDescri(e.target.value)}></textarea>
            </div>
          <div className='container2_c2'>
              <div className='container2c2_coluna-1'>
                <label>Tipo de pele</label>
                <select className='tipopele' value={tipopele} onChange={(e) => setTipopele(e.target.value)}>
                  <option>selecionar</option>
                </select>
                <label>Tamanhos</label>
                <select className='tamanhos' value={tamanho} onChange={(e) => setTamanho(e.target.value)}>
                  <option>selecionar</option>
                </select>
                <label>Marca</label>
                <select value={marca} onChange={(e) => setMarca(e.target.value)}>
                  <option>selecionar</option>
                </select>
              </div>
              <div className='container2c2_coluna-2'>
                  <label>Estoque</label>
                  <select className='tipopele' value={estoque} onChange={(e) => setEstoque(e.target.value)}>
                    <option>selecionar</option>
                  </select>
                  <label>Quantidade</label>
                  <select className='tamanhos' value={qtd} onChange={(e) => setQtd(Number(e.target.value))}>
                    <option>selecionar</option>
                  </select>
                  <label>Necessidades</label>
                  <select value={necess} onChange={(e) => setNecess(e.target.value)}>
                    <option>selecionar</option>
                  </select>
              </div>
            </div>
            <div className='container2_c3'>
              <div className='container2c3_bloco-1'>
                <label>Ingredientes Ativos</label>
                <select value={ingre_atv} onChange={(e) => setIngre_atv(e.target.value)}>
                  <option>
                    selecionar
                  </option>
                  <optgroup label='grupo-1'>
                    <option>opção 1</option>
                  </optgroup>
                  <optgroup label='grupo-2'>
                    <option>opção 2</option>
                  </optgroup>
                </select>
              </div>
              <div className='container2c3_bloco-2'>
                <label>Indicações</label>
                  <textarea value={indica} onChange={(e) => setIndica(e.target.value)}></textarea>
              </div>
            </div>
            <button id='botao' onClick={adicionarproduto}>Confirmar Cadastro</button>
          </div>
        </section>
      </div>
    </div>
  );
}