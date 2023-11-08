import './index.scss';
import storage from 'local-storage'
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { logarUsuario } from '../../../../api/postAPi.js';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false)

  const navigate = useNavigate();
  const ref = useRef();

  async function Login() {
    ref.current.continuousStart();
    setCarregando(true);
    try {
      const resposta = await logarUsuario(email, senha);
      storage('usuario-logado', resposta);

      setTimeout( () => {
        navigate('/');
      }, 2500);
      
    } catch (err) {
      ref.current.complete();
      setCarregando(false);
      setErro(err.response.data.erro)
    }
  }

  return (
    <div className="index_login_usuario">
      <LoadingBar color='#43B541' ref={ref} />

        <div className='sec_1'>

          <div className='sec1_div_img'>
            <img src='/assets/images/usuario/login/tccsoleil2s2login_img.png' alt=''></img>
          </div>

          <div className='sec1_login'>
           
              <div className='s1-login'>
                <p id='solleil'>SOLLEIL</p>
                <p id='login'>Faça seu Login</p>
              </div>

              <div className='s2-login'>

                <div id='input_log1'>
                  <label>Email</label>
                  <input type='text' className='input_email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>

                <div id='input_log1'>
                <label>Senha</label>
                <input type='password' className='input_senha' value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                </div>
                
                <button onClick={Login} disabled={carregando} className='button'>Continuar</button>
                <h4 id='erro'>{erro}</h4>
                <h6><Link to={'/cadastro'} id='pag_cadastro'>Não tem uma conta? Realize seu Cadastro.</Link></h6>

              </div>
          </div>
        </div>  
    </div>
  );
}