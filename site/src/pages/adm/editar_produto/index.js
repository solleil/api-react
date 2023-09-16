import './index.scss';
import Cabecalho from '../../../components/cabecalho'

export default function EditarProduto() {
  return (
    <div className="index_editarProduto">
      <Cabecalho className='cabecalho'/>
      <div className='fundo_pagina'>
        <section className='sec_1'>
          <header className='sec1_header_Id'>
            <h1>Id do Produto: {}</h1>
          </header>
          <div className='sec1_tela-Editar-Remover'>
            <div className='info_produto'>
              <div className='info_exemplo_temporario'>
                <noscript><img src='' alt=''/></noscript>
                <h5>Imagem Produto</h5>
              </div>
              <div className='c1_tela'>
                <h3>Nome do Produto: {} </h3>
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
              <input type='text'></input>
              <label>Preço</label>
              <input type='text'></input>
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
              <input type='text'></input>
            </div>
            <button id='botao'>Excluir Dados</button>
          </div>
          <div className='sec2_container-2'>
            <div className='container2_c1'>
              <label>Descrição</label>

              <textarea></textarea>
              
            </div>
          <div className='container2_c2'>
              <div className='container2c2_coluna-1'>
                <label>Tipo de pele</label>
                <select className='tipopele'>
                  <option>selecionar</option>
                </select>
                <label>Tamanhos</label>
                <select className='tamanhos'>
                  <option>selecionar</option>
                </select>
                <label>Marca</label>
                <select>
                  <option>selecionar</option>
                </select>
              </div>
              <div className='container2c2_coluna-2'>
                  <label>Estoque</label>
                  <select className='tipopele'>
                    <option>selecionar</option>
                  </select>
                  <label>Quantidade</label>
                  <select className='tamanhos'>
                    <option>selecionar</option>
                  </select>
                  <label>Necessidades</label>
                  <select>
                    <option>selecionar</option>
                  </select>
              </div>
            </div>
            <div className='container2_c3'>
              <div className='container2c3_bloco-1'>
                <label>Ingredientes Ativos</label>
                <select>
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
                  <textarea></textarea>
              </div>
            </div>
            <button id='botao'>Confirmar Alteração</button>
          </div>
        </section>
      </div>
    </div>
  );
}