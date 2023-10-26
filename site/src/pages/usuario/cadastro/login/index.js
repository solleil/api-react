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
    

        <div className='sec_1'>

          <div className='sec1_div_img'>
            <img src='/assets/images/usuario/login/tccsoleil2s2login_img.png' alt=''></img>
          </div>

          <div className='sec1_login'>
           
              <div className='s1-login'>
                <p id='solleil'>Solleil</p>
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
                
                <button onClick={loginUsuario}>Continuar</button>
                <h4>ou</h4>
                <h6><Link to={'/cadastro'} id='pag_cadastro'>Não tem uma conta? Realize seu Cadastro.</Link></h6>

              </div>


             
 
              
          
          </div>
        </div>  



    </div>
  );
}