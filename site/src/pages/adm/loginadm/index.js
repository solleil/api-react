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

        <div className='s1'>

        <img className='md-adm' src='/assets/images/geral/modelolgadm.png' alt='' />

        <
      </div>

        
      </div>
    );
}