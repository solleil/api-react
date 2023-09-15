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
          <input type='text'></input>
        </div>
        <div className='c-1-1'>

        </div>
        <div className='c-2'>

        </div>
      </div>

    </div>
  );
}