import './index.scss';
import Cabecalho from '../../../components/cabecalho';


export default function AddProduto() {
  return (
    <div className="s-1">
      <div className='c-1'>
        <Cabecalho/>
      </div>


      <div className='s-1-1'>
        <p>Adicionar Produto</p>
        <div className='l-1'></div>
      </div>


      <div className='s-2'>
        <div className='i-1'>
          <p>Nome</p>
            <input type='text'></input>
          <p>Preço</p>  
            <input type='text'></input>
        </div>
        <div className='i-2'>
          <p>Descrição</p>
          <input type='text'></input>
        </div>
      </div>


      <div className='s-3'>

        <div className='a-1'>
          <p>Adicionar imagem:</p>
          <div className='b-1'>
            <img className='cima' src='./assets/images/geral/salvar.svg'/>
            <div className='b-2'>
              <img className='embaixo' src='./assets/images/geral/export.svg'/>
            </div>  
          </div>
        </div>


        <textarea></textarea>
        <div className='c-1-1'>
           <label className='tipodepele'>Tipo de pele</label>
           <select>
            <option>Selecionar</option>
            </select>

            <label className='tamanho'>Tamanhos</label>
           <select>
            <option>Selecionar</option>
            </select>

            <label className='marca'>Marca</label>
           <select>
            <option>Selecionar</option>
            </select>

            <label className='quantidade'>Quantidade</label>
           <select>
            <option>Selecionar</option>
            </select>

            <label className='necessidade'>Necessidade</label>
           <select>
            <option>Selecionar</option>
            </select>
          </div>

        </div>

        <div className='c-2'>

            
        </div>
      </div>

  
  );
}