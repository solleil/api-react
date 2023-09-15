import { useState } from 'react';
import './index.scss';

export default function Loginadm() {

    const [nmUsuario, setUsuario] = useState('');
    const [admSenha, setSenha] = useState('');
    const [verSenha, setVsenha] = useState(false);


  return (
    <div className="pag-login-adm">
      <div className='modeloadm'>
       <img className='md-adm' src='/assets/images/geral/modelolgadm.png' alt='' />
       </div>
      <div className='lg-tudo'>
       <img className='sol' src='/assets/images/geral/sol.png' alt='' />
      <div className='usuario'>
        Usuário
        <input type='text' value={nmUsuario} onChange={e=> setUsuario(e.target.value)} />  
        <img src='' alt='' />
      </div>

      <div className='senha'>
        Senha
        <div className='input-senha'>
        <input
              type={verSenha ? 'text' : 'password'}
              value={admSenha}
              onChange={e => setSenha(e.target.value)}
            />
            <i
              className={`fas ${verSenha ? 'fa-eye-slash' : 'fa-eye'}`}
              onClick={() => setVsenha(!verSenha)}
            ></i>
        </div>
        
      </div>

     <div>
       <button className='bt-entrar'><h2>Entrar</h2></button>
       </div>

       <div className='anonimo'>
      <img src='/assets/images/geral/anonimo.png' alt='' />
      </div>

     </div>
    </div>
  );
}