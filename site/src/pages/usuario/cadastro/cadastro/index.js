import './index.scss';
import { Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { inserirUsuario } from '../../../../api/postAPi'
import axios from 'axios';

export default function Cadastro() {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [erroConfirma, setErroConfirma] = useState('');
  const [dtNascimento, setDtNascimen] = useState(0);


  const [tipoPele, setTipoPele] = useState(0);
  const [tipoPeleSelecionado, setPeleSelecionado] = useState([]);
  async function listarTiposdePele() {
      
      const r = await axios.get("http://localhost:5000/tipopele");
      setPeleSelecionado(r.data);

  }

  async function inserirUsuario(){
    try {
      
      if(senha!==confirmaSenha){
        setErroConfirma('As senhas não coincidem.');
            return;
      }
      
      const r = await inserirUsuario(
        nome,
        sobrenome,
        cpf,
        email,
        senha,
        dtNascimento

     );
     
     alert('Usuário Cadastrado');
    } catch (err) {
      alert(err.massage)
      
    }
  }
  

  useEffect(() =>{
    listarTiposdePele()
  }, [])

  return (
    <div className='tude'>

      <div className='c-0'>

        <div className='fundo'>
          <img src='/assets/images/geral/fe.png' alt='' />
        </div>

        <div className='c-1'>

          <div className='c-2' >

            <div className='cadastro'>
            <p>CADASTRO</p>
            </div>


            <div className='c-3'>
                
                <div className='no-1'>
                    
                    <input type='Nome' id='nome'  placeholder="NOME" value={nome} onChange={ (e) => setNome(e.target.value)}></input>
                </div>
              
                <div className='no-1'>
                  
                  <input type='text' id='sobrenome' placeholder="SOBRENOME" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}></input>
                </div>
             </div>

            <div className='c-4'>
              <div className='no-1'>
              
              <input type='text' id='cpf' placeholder="CPF" value={cpf} onChange={(e) => setCpf(Number(e.target.value))}></input>
              </div>
              <div className='no-1'>
              
              <input type='email' id='email' placeholder="E-MAIL" value={email} onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div className='no-1'>
              
              <input type='password' id='senha' placeholder="SENHA" value={senha} onChange={(e) => setSenha(Number(e.target.value))}></input>
              </div>
              <div className='no-1'>
              
              <input type='password' id='senhac' placeholder= "CONFIRMAÇÃO DE SENHA" value={confirmaSenha} onChange={(e) => setConfirmaSenha(Number(e.target.value))}></input>
              <p className='mensagem-erro-senha'> {erroConfirma} </p>
              
              </div>
            </div>


            <div className='no-1'>
              
              <label>DATA DE NASCIMENTO</label>
              <input type='date' id='dtna' value={dtNascimento} onChange={(e) => setDtNascimen(Number(e.target.value))}></input>
              
            </div>

            <div className='c-6'>
              <div className='no-1'>
              <select className='tipodepele' value={tipoPele} onChange={e => setTipoPele(e.target.value)}>
                <option id='tipopele' value={0}> Tipo Pele </option>
                {
                  tipoPeleSelecionado.map(item =>

                    <option value={item.id}> {item.nome} </option>
                  )

                } 
              </select>
              </div>
              </div>
            
                <Link to={'http://localhost:3000/conta'}>
                <button className='botao'  onclick={inserirUsuario} >Cadastrar</button>
                </Link>
          </div>


        </div>
      </div>

     

    </div>
  );
}