import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CadastrarUsuario } from '../../../../api/postAPi';


export default function CadastrarUsuarioPage() {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');


  const [senha, setSenha] = useState('');
  const [confirsenha, setConfirsenha] = useState('');

  const [data, setData] = useState('');

  const [tipoPele, setTipoPele] = useState(0);
  const [tipoPeleSelecionado, setPeleSelecionado] = useState([]);
  


  async function listarTiposdePele() {
    const r = await axios.get("http://localhost:5000/tipopele");
    setPeleSelecionado(r.data);
  };

  async function Cadastrar() {
    try {
      const r = await CadastrarUsuario(nome, sobrenome, telefone, email, cpf, data, senha)

      alert('Usuario Cabastrado')

    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }

  }

  useEffect(() => {
    listarTiposdePele()
  }, []);

  return (

    <main className="cadastro">
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

            <div className="dif-3">

              <select
                className='tipodepele'
                value={tipoPele}
                onChange={e => setTipoPele(e.target.value)}>

                <option id='tipopele' value={0}>Tipo Pele</option>
                {
                  tipoPeleSelecionado.map(item =>
                    <option value={item.id}> {item.nome} </option>)

                }

              </select>
            </div>

            <button onClick={Cadastrar} className="botao">Cadastrar</button>
           

            <Link className='pag-log' to={'http://localhost:3000'}>« voltar para login</Link>



          </div>

        </div>

      </div>

    </main>
  )
}