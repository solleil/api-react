import Cabecalho from '../../../components/cabecalho';
import './index.scss';
import { useState } from 'react';

export default function Consulta() {
  const [codig, setCodig] = useState('')
  const [nmProduto, setNmProduto] = useState('')
  const [categoria, setCategoria] = useState('')
  const [sttProduto, setSttProduto] = useState('')
  const [idUsu, setIdUsu] = useState('')
  const [marca, setMarca] = useState('')
  const [transport, setTransport] = useState('')
  const [filtpreco, setFiltrPreco] = useState('')
  const [anotaprodut, setAnotProduto] = useState('')

const removerdado = () => {
    setCodig(0)
    setNmProduto('');
    setCategoria('');
    setSttProduto('');
    setIdUsu('');
    setMarca('');
    setTransport('');
    setFiltrPreco('');
    setAnotProduto('');
  }
  return (
    <div className="pag-consu">
      <div className='cabeca'>
      <Cabecalho/>
      </div>
      <div className='tud'>

      <div className='r-1'>
        <p>Consulta de Produto</p>
        <div className='linh'></div>
      </div>
    <div className='r-2'>
    <div className='r-2-2'>
      <div className='sim'>
        <p>Codigo:</p>
        <input type='text' value={codig} onChange={(e) => setCodig (e.target.value)}></input>
    </div>
    <div className='sim-1'>
      <p>Nome do Produto:</p>
      <input type='text' value={nmProduto} onChange={(e) => setNmProduto (e.target.value)}></input>
     </div> 
    </div>
  </div>
    <div className='recal'>
      <div className='r-3'>

      <p>Categoria</p>
      <input type='text' value={categoria} onChange={(e) => setCategoria (e.target.value)}></input>

      <p>Marca/Fornecedor:</p>
      <input type='text' value={marca} onChange={(e) => setMarca (e.target.value)}></input>

      </div>

      <div className='r-4'>
        
      <p>Status do Produto:</p>
      <input type='text' value={sttProduto} onChange={(e) => setSttProduto (e.target.value)}></input>

      <p>Transportadora:</p>
      <input type='text' value={transport} onChange={(e) => setTransport (e.target.value)}></input>

      </div>

      <div className='r-5'>

      <p>ID do Usuário:</p>
      <input type='text' value={idUsu} onChange={(e) => setIdUsu (e.target.value)}></input>

      <p>Filtrar por preço:</p>
      <input type='text' value={filtpreco} onChange={(e) => setFiltrPreco (e.target.value)}></input>
      

      </div>

      </div>

      <div className='anot'>

          <div className='anot-1'>

          <p>Anotações sobre o Produto:</p>
          <input type='text'value={anotaprodut} onChange={(e) => setAnotProduto (e.target.value)}></input>
        
          </div>
          <div className='anot-2'>
            <div>
            <button id='bot'>Procurar</button>
            </div>
            <div>
            <button id='bot' onClick={removerdado}>Excluir produto</button>
            </div>
          </div>
      </div>

      <div className='result'>
          <div className='li'>
          <div className='li-1'></div>

          <div className='raa'>
            <p>Resultado:</p>
          </div>
          </div>

          <div className='nomes'>
            <p>Nome produto:</p>
            <div className='ba-1'>

            </div>

            <div className='resu'></div>

            <p>Nome produto:</p>
            <div className='ba-1'></div>

            <div className='resu'></div>

            <p>Nome produto:</p>
            <div className='ba-1'></div>

            <div className='resu'></div>

            <p>Nome produto:</p>
            <div className='ba-1'></div>
          </div>
      </div>

    </div>

    </div>
  );
}