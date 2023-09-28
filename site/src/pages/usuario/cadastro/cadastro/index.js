import './index.scss';
import { useState } from 'react';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [dtNascimento, setDtNascimen] = useState(0);
  const [tipoPele, setTipoPele] = useState('');

  const cadastrar = () => {
    setNome('')
    setSobrenome(0);
    setCpf('');
    setEmail('');
    setEmail('');
    setSenha('');
    setConfirmaSenha('');
    setDtNascimen(0);
    setTipoPele('');
   
  }

  return (
    <div className='tude'>

      <div className='c-0'>

        <div className='fundo'>
          <img src='/assets/images/geral/fe.png' alt='' />
        </div>

        <div className='c-1'>

          <div className='c-2'>

            <div className='cadastro'>
            <p>CADASTRO</p>
            </div>


            <div className='c-3'>
                
                <div className='no-1'>
                    
                    <input type='Nome'  placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                </div>
              
                <div className='no-1'>
                  
                  <input type='text'  placeholder="Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}></input>
                </div>
             </div>

            <div className='c-4'>
              <div className='no-1'>
              
              <input type='text'  placeholder="CPF" value={cpf} onChange={(e) => setCpf(Number(e.target.value))}></input>
              </div>
              <div className='no-1'>
              
              <input type='text'  placeholder="E-MAIL" value={email} onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div className='no-1'>
              
              <input type='text'  placeholder="SENHA" value={senha} onChange={(e) => setSenha(Number(e.target.value))}></input>
              </div>
              <div className='no-1'>
              
              <input type='text'  placeholder= "CONFIRMAÇÃO DE SENHA" value={confirmaSenha} onChange={(e) => setConfirmaSenha(Number(e.target.value))}></input>
              </div>
            </div>


            <div className='c-5'>
              
              <label>DATA NASCIMENTO</label>
              <input type='date' value={dtNascimento} onChange={(e) => setDtNascimen(Number(e.target.value))}></input>
              
            </div>

            <div className='c-6'>
              <div className='no-1'>
              <select className='tipodepele' value={tipoPele} onChange={(e) => setTipoPele(e.target.value)}>
                <option>Tipo de Pele</option>
              </select>
              </div>
            </div>

            <button id='botao'  onclick={cadastrar}>CADASTRAR</button>
          </div>


        </div>
      </div>
    </div>
  );
}