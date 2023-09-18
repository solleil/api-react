import './index.scss';
import { useState } from 'react';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [dtNascimento, setDtNascimen] = useState('');
  const [tipoPele, setTipoPele] = useState('');


  return (
    <div className='tude'>

      <div className='c-0'>

        <div className='fundo'>
          <img src='/assets/images/geral/fe.png' alt='' />
        </div>

        <div className='c-1'>
          <div className='c-2'>
            <p>CADASTRO</p>

            <div className='c-3'>
              <label>Nome</label>
              <input type='text' value={nome} onChange={(e) => setNome(e.target.value)}></input>
              <label>Sobrenome</label>
              <input type='text' value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}></input>
            </div>
            <div className='c-4'>
              <label>CPF</label>
              <input type='text' value={cpf} onChange={(e) => setCpf(Number(e.target.value))}></input>
              <label>E-MAIL</label>
              <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
              <label>SENHA</label>
              <input type='text' value={senha} onChange={(e) => setSenha(Number(e.target.value))}></input>
              <label>CONFIRMAÇÃO DE SENHA</label>
              <input type='text' value={confirmaSenha} onChange={(e) => setConfirmaSenha(Number(e.target.value))}></input>
            </div>
            <div className='c-5'>
              <label>DATA NASCIMENTO</label>
              <input type='date' value={dtNascimento} onChange={(e) => setDtNascimen(Number(e.target.value))}></input>
            </div>
            <div className='c-6'>
              <select className='tipodepele' value={tipoPele} onChange={(e) => setTipoPele(e.target.value)}>
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