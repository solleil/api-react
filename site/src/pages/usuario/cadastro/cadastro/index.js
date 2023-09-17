
import './index.scss';

export default function Cadastro() {



  return (
    <div className='tude'>

      <div className='c-0'>

    <div className='fundo'>
      <img src='/assets/images/geral/fe.png' alt=''/>
    </div>

    <div className='c-1'>
      <div className='c-2'>
        <p>Cadastro</p>

        <div className='c-3'>
          <input type='text'></input>
          <input type='text'></input>
        </div>
        <div className='c-4'>
        <input type='text'></input>
        <input type='text'></input>
        <input type='text'></input>
        <input type='text'></input>
        </div>
        <div className='c-5'>
          <input type='text'></input>
        </div>
        <div className='c-6'>
        <select className='tipodepele'>
            <option>Tipodepele</option>
            </select>
        </div>

        <button id='botao'>CADASTRAR</button>
      </div>
      
      
    </div>
    </div>
   </div>
  );
}