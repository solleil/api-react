import './index.scss';
import Cabecalho from '../../../components/cabecalho'

//AINDA NÃO TERMINEI - DAVI

export default function EditarProduto() {
  return (
    <div className="index_consultar">

      <Cabecalho/>

      <section className='sec_1'>
        <header className='sec1_header_Id'>
          <h1>oi</h1>
        </header>
        <div className='sec1_tela-Editar-Remover'>
          <div className='info_produto'>
            <img src='' alt=''/>
            <div className='c1_tela'>
              <h1>{}oi</h1>
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
              <div className='tela_por_img'></div>
            </div>
          </div>
          <div className='container1_c3'>
            <label>Ingredientes</label>
            <input type='text'></input>
          </div>
          <button>Excluir Dados</button>
        </div>
        <div className='sec2_container-2'>
          <div className='container2_c1'>
          <label>Descrição</label>
          <input type='text'></input>
          </div>
          <div className='container2_c2'>
            <div className='container2c2_coluna-1'>
              <label>Tipo de pele</label>
              <select>
                <option>tipo 1</option>
              </select>
            </div>
            <div className='container2c2_coluna-2'>

            </div>
          </div>
        </div>

      </section>


    </div>
  );
}