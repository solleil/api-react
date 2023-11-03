import './index.scss';
import { Link} from 'react-router-dom';
import { useState } from 'react';

export default function Cadastro() {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirsenha, setConfirsenha] = useState('');
  const [data, setData] = useState('');

  const [tipoPele, setTipoPele] = useState(0);

  const cadastra = () => {
    setNome('')
    setSobrenome('');
    setCpf(0);
    setEmail('');
    setConfirsenha(0);
    setConfirsenha(0);
    setData(0);
    setTipoPele(0);

  }
  const Cadastrar = (e) => {
    e.preventDefault();

  };


  return (

      <main classname="cadastro">
          <div classname="tudx">
            <div className='imgg'>
            <img className="imagex" src='/assets/images/usuario/cadastro/aha.jpg' alt=''></img>
            </div>

            <div className='T-0'>
              <h1>Cadastro</h1>

               <form  onSubmit={Cadastrar}>
                <div className='dif'>
                <input type='nome'  placeholder="Nome" value={nome} onChange={ (e) => setNome(e.target.value)}></input>
                <input type='text'  placeholder="Sobrenome" value={sobrenome} onChange={ (e) => setSobrenome(e.target.value)}></input>
                </div>

                <div className='dif-1'>
                <input type='email'  placeholder="E-mail" value={email} onChange={ (e) => setEmail(e.target.value)}></input>
                <input type='text'  placeholder="CPF" value={cpf} onChange={ (e) => setCpf(Number(e.target.value))}></input>
                <input type='password'  placeholder="Senha" value={senha} onChange={ (e) => setSenha(e.target.value)}></input>
                <input type='password'  placeholder="Confirmar senha" value={confirsenha} onChange={ (e) => setConfirsenha(e.target.value)}></input>
                </div>

                <div className='dif-2'>
                <label></label>
                <input type='date' value={data} onChange={ (e) => setData(e.target.value)}></input>
                </div>


              <div className="dif-3"> 
              <select className='tipodepele'  value={tipoPele} onChange={e => setTipoPele(e.target.value)}>
              <option id='tipopele' value={0}>Tipo Pele</option>
              
              </select>
              </div> 

                <button type="submit" onclick={cadastra}  className="botao">Cadastrar</button>
                <Link className='pag-log' to={'http://localhost:3000'}>« voltar para login</Link>



               </form>

            </div>

          </div>

      </main>
)
}