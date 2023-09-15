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
            <input type='text'></input>
            <input type='text'></input>
        </div>
        <div className='i-2'>
          <input type='text'></input>
        </div>
      </div>
    </div>
  );
}