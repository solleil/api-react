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
        navigate('/home/adm');
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


        <div className='s1'>
          <img className='img-s1' src='/assets/images/adm/login/moca.jpg' alt='' />

          <div className='s2'>

          <img className='sol' src='/assets/images/geral/sol.png' alt='' />

          <div className='s2-gap'>
            <label>Email</label><br></br>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className='s2-gap'>
            <label>Senha</label><br></br>
              <input type={verSenha ? 'text' : 'password'} value={admSenha} onChange={e => setSenha(e.target.value)} />  
          </div>

          <div>
            <h4>{erro}</h4>
          </div>

          <div>
            <button className='s2-button' onClick={login} disabled={carregando}><h2>entrar</h2></button>
          </div>


          </div>
          
        </div>


    
       

        
      </div>
    );
}