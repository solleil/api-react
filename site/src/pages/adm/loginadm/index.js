import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './index.scss';

export default function Loginadm() {
  const [email, setEmail] = useState('');
  const [admSenha, setSenha] = useState('');
  const [verSenha, setVsenha] = useState(false);
  const navigate = useNavigate();

  const loginAdmin = async () => {
    try {
      const url = 'http://localhost:5000/admin/login';
      const respo = await axios.post(url, {email: email, senha: admSenha})
      navigate('/inicialadm')
    } catch (err) {
      
    }
  }




  return (
    <div className="pag-login-adm">
      <div className='modeloadm'>
        <img className='md-adm' src='/assets/images/geral/modelolgadm.png' alt='' />
      </div>
      <div className='lg-tudo'>
        <img className='sol' src='/assets/images/geral/sol.png' alt='' />
        <div className='usuario'>
          <label>Email</label>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='senha'>
          <label>Senha</label>
          <div className='input-senha'>
            <input type={verSenha ? 'text' : 'password'} value={admSenha} onChange={e => setSenha(e.target.value)} />
            <i className={`fas ${verSenha ? 'fa-eye-slash' : 'fa-eye'}`} onClick={() => setVsenha(!verSenha)}></i>
          </div>
        </div>

        <div>
          <button className='bt-entrar' onClick={loginAdmin}><h2>Entrar</h2></button>
        </div>

        <div className='anonimo'>
          <img src='/assets/images/geral/anonimo.png' alt='' />
        </div>

      </div>
    </div>
  );
}