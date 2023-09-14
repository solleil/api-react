import './index.scss';

export default function Login() {
  return (
    <div className="index_login_usuario">
      <div className='fundo'>
        <div className='sec_1'>
          <div className='sec1_div_img'>
            <img src='/assets/images/usuario/login/tccsoleil2s2login_img.png' alt=''></img>
          </div>
          <div className='sec1_login'>
            <div className='login_1'>
              <h2>Solleil</h2>
              <h2>Faça seu Login</h2>
              <input className='input_email'></input>
              <input className='input_senha'></input>
              <button>Continuar</button>
              <h6>Esqueceu sua Senha?</h6>
            </div>
            <div className='login_2'>
              <div></div>
              <h4>ou</h4>
              <div></div>
            </div>
            <div className='login_3'>
              <button className='botao_face'>Continuar com Facebook</button>
              <button>Continuar com Google</button>
              <h6>Não tem uma conta? Realize seu login.</h6>
            </div>
          </div>
        </div>    
      </div>
    </div>
  );
}