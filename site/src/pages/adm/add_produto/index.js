import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import { useState } from 'react';


export default function AddProduto() {
  
  const [np, setNp] = useState('')
  const [cp, setCp] = useState('')
  const [desc, setDesc] = useState('')
  const [tp, setTp] = useState('')
  const [tam, setTam] = useState('')
  const [marc, setMarc] = useState('')
  const [quant, setQuant] = useState('')
  const [nece, setNece] = useState('')
  const [ingree, setIngree] = useState('')
  const [ingrea, setIngrea] = useState('')
  const [indi, setIndi] = useState('')

  const removerdado = () => {
    setNp('')
    setCp(0);
    setDesc('');
    setTp('');
    setTam('');
    setQuant(0);
    setMarc('');
    setNece('');
    setIndi('');
    setIngree('');
    setIngrea('');
  }



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
            <input type='text' value={np} onChange={(e) => setNp (e.target.value)}></input>

          <p>Preço</p>  
            <input type='text' value={cp} onChange={(e) => setCp (e.target.value)}></input>

        </div>

        <div className='i-2'>

          <p>Descrição</p>
          <input type='text' value={desc} onChange={(e) => (e.target.value)}></input>

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

          <div className='c-1-outro'>

           <label >Tipo de pele</label>
           <select className='tipodepele' value={tp} onChange={(e) => setTp (e.target.value)}>
            <option>Selecionar</option>
            </select>

            <label >Tamanhos</label>
           <select className='tamanho' value={tam} onChange={(e) => setTam (e.target.value)}> 
            <option>Selecionar</option>
            </select>

            <label >Marca</label>
           <select className='marca' value={marc} onChange={(e) => setMarc (e.target.value)}>
            <option>Selecionar</option>
            </select>
          </div>  

        <div className='c-1-lado'>

            <label >Quantidade</label>
           <select className='quantidade' value={quant} onChange={(e) => setQuant (e.target.value)}>
            <option>Selecionar</option>
            </select>

            <label >Necessidade</label>
           <select className='necessidade' value={nece} onChange={(e) => setNece (e.target.value)}>
            <option>Selecionar</option>
            </select>
        </div>
          
          </div>


        </div>


        <div className='c-2-2'> 

          <div className='c-2-lado'>
              <p>Ingrediente</p>
              <input className='ingrediente' value={ingree} onChange={(e) => setIngree (e.target.value)}></input>
          </div>
          <div className='c-2-outro'>
              <p>Ingredientes ativos</p>
              <input className='Ingredientes ativos' value={ingrea} onChange={(e) => setIngrea (e.target.value)}></input>

              <p>Indicações</p>
              <input className='Indicações' value={indi} onChange={(e) => setIndi (e.target.value)}></input>
          </div>
          </div>  

        <div className='botaos'>
        <div>
          <button id='botao' onClick={removerdado}>Excluir dados</button>
        </div>
        <div>
          <button id='botao'>Confirmar cadastro</button>
        </div>

        </div>
      </div>

  );
}