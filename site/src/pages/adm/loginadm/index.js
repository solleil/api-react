import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'
import './index.scss';
import { logarAdmin } from '../../../api/postAPi.js';
import LoadingBar from 'react-top-loading-bar';

export default function Loginadm() {
  const [email, setEmail] = useState('');
  const [admSenha, setSenha] = useState('');
  const [verSenha, setVsenha] = useState(false);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando ] = useState(false);

  const navigate = useNavigate();
  const ref = useRef();

  useEffect(()=> {
    if (storage('admin-logado')) {
      navigate('/inicialadm')
    }
  }, [])

  async function login() {
    ref.current.continuousStart();
    setCarregando(true);
    try {
      const resposta = await logarAdmin(email, admSenha);
      storage('admin-logado', resposta);
      setTimeout(() => {
        navigate('/inicialadm');
      }, 2500)

    } catch (err) {
      ref.current.complete();
      setCarregando(false);
      setErro(err.response.data.erro)
    };
  };


    return (
      <div className="pag-login-adm">
        <LoadingBar color='#f11946' ref={ref} />

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
            <h4>{erro}</h4>
          </div>

          <div>
            <button className='bt-entrar' onClick={login} disabled={carregando}><h2>Entrar</h2></button>
          </div>

          <div className='anonimo'>
            <img src='/assets/images/geral/anonimo.png' alt='' />
          </div>

        </div>
      </div>
    );
}