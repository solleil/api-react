import './index.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate();


  const loginUsuario = async () => {
    try { 
    const url = 'http://localhost:5000/login';
    const respo = await axios.post(url, {email: email, senha: senha});
    navigate('/');

    
    } catch (err) {
      if (err === 404) {
        setErro(err.response.data.erro)
      }
    }
 }

  return (
    <div className="index_login_usuario">
      <div className='fundo'>
        <div className='sec_1'>
          <div className='sec1_div_img'>
            <img src='/assets/images/usuario/login/tccsoleil2s2login_img.png' alt=''></img>
          </div>
          <div className='sec1_login'>
            <div className='login_1'>
              <div className='log1_titulos'>
                <h2 id='solleil'>Solleil</h2>
                <h2 id='login'>Faça seu Login</h2>
              </div>
              <div className='log1_inputs'>
                <div id='input_log1'>
                  <label>Email</label>
                  <input type='text' className='input_email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div id='input_log1'>
                <label>Senha</label>
                <input type='password' className='input_senha' value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                </div>
              </div>
              <button onClick={loginUsuario}>Continuar</button>
              <h6 id='reset_log1'>Esqueceu sua Senha?</h6>
            </div>
            <div className='login_2'>
              <h4>ou</h4>
            </div>
            <div className='login_3'>
              <button id='botao_face'>Continuar com Facebook</button>
              <button>Continuar com Google</button>
              <h6><Link to={'/cadastro'} id='pag_cadastro'>Não tem uma conta? Realize seu Cadastro.</Link></h6>
            </div>
          </div>
        </div>    
      </div>
    </div>
  );
}