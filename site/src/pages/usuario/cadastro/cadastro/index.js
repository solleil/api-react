import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import storage from 'local-storage';
import LoadingBar from 'react-top-loading-bar'
import { CadastrarUsuario, logarUsuario } from '../../../../api/postAPi';
import { listarTiposdePele } from '../../../../api/getAPI';


export default function CadastrarUsuarioPage() {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');


  const [senha, setSenha] = useState('');
  const [confirsenha, setConfirsenha] = useState('');

  const [data, setData] = useState('');

  const [tiposPeleS, setTiposPeleS] = useState([]);

  const [carregando, setCarregando] = useState(false)

  const navigate = useNavigate();
  const ref = useRef();




  async function Cadastrar() {
    setCarregando(true);
    try {

      await CadastrarUsuario(nome, sobrenome, telefone, email, cpf, data, senha)
      logarCliente();

    } catch (err) {

      ref.current.complete();
      setCarregando(false);
      alert(err.message);

    }
  }

  async function logarCliente() {
    
    ref.current.continuousStart();
    try {
      const respo = await logarUsuario(email, senha);
      storage('usuario-logado', respo);

      setTimeout(() => {
        navigate('/login');
      }, 2500);

    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    if (storage('usuario-logado')) {
      navigate('/login');
    };
  });

  async function carregarTiposPele() {
    const respo = await listarTiposdePele(0);
    setTiposPeleS(respo);
  }

  useEffect(() => {
    carregarTiposPele()
  }, []);

  return (
    <main className="cadastro">
      <LoadingBar color='#43B541' ref={ref} />
      <div className="tudx">
        <div className='imgg'>
          <img className="imagex" src='/assets/images/usuario/cadastro/aha.jpg' alt=''></img>
        </div>

        <div className='T-0'>
          <h1>Cadastro</h1>

          <div className='form'>
            <div className='dif'>

              <input
                type='nome'
                placeholder="Nome"
                value={nome}
                onChange={e => setNome(e.target.value)}>

              </input>


              <input
                type='text'
                placeholder="Sobrenome"
                value={sobrenome}
                onChange={e => setSobrenome(e.target.value)}>

              </input>


            </div>

            <div className='dif-1'>
              <input
                type='email'
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}>

              </input>


              <input
                type='telefone'
                placeholder="Telefone"
                value={telefone}
                onChange={e => setTelefone(e.target.value)}>

              </input>


              <input
                type='text'
                placeholder="CPF"
                value={cpf}
                onChange={e => setCpf(e.target.value)}>

              </input>


              <input
                type='password'
                placeholder="Senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}>

              </input>


              <input
                type='password'
                placeholder="Confirmar senha"
                value={confirsenha}
                onChange={e => setConfirsenha(e.target.value)}>

              </input>


            </div>

            <div className='dif-2'>
              <input
                type='date'
                value={data}
                onChange={e => setData(e.target.value)}>

              </input>
            </div>

            

            <button onClick={Cadastrar} disabled={carregando} className="botao">Cadastrar</button>


            <Link className='pag-og' to={'/login'}>« voltar para login</Link>



          </div>

        </div>

      </div>

    </main>
  )
}