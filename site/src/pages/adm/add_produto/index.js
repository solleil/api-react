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
            <img className='cima' src='./assets/images/geral/salvar.svg' alt=''/>
            <div className='b-2'>
              <img className='embaixo' src='./assets/images/geral/export.svg' alt=''/>
            </div>  
          </div>
        </div>


        
        <div className='c-1-1'>
           <label >Tipo de pele</label>
           <select className='tipodepele'>
            <option>Selecionar</option>
            </select>

            <label >Tamanhos</label>
           <select className='tamanho'>
            <option>Selecionar</option>
            </select>

            <label >Marca</label>
           <select className='marca'>
            <option>Selecionar</option>
            </select>

            <label >Quantidade</label>
           <select className='quantidade'>
            <option>Selecionar</option>
            </select>

            <label >Necessidade</label>
           <select className='necessidade'>
            <option>Selecionar</option>
            </select>
          </div>

        </div>

        <div className='c-2'>

            
        </div>
      </div>

  
  );
}