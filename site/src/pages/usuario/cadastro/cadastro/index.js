import './index.scss';
import { Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { inserirUsuario } from '../../../../api/postAPi.js'

import axios from 'axios';

export default function Cadastro() {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState([]);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dtNascimento, setDtNascimen] = useState(0);

  const [confirmaSenha, setConfirmaSenha] = useState([]);
  const [cadastroFeito, setCadastroFeito] = useState(false);
 

  const [tipoPele, setTipoPele] = useState(0);
  const [tipoPeleSelecionado, setPeleSelecionado] = useState([]);

  const inserirUsuario = () => {
    setCadastroFeito(true);

    setTimeout (() =>{
      setCadastroFeito(false);
    })
  }
  
  

  async function listarTiposdePele() {
  
      const r = await axios.get("http://localhost:5000/tipopele");
      setPeleSelecionado(r.data);

  }

  useEffect(() =>{
    listarTiposdePele()
  }, []);

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
              
              <input type='password' maxLength={8} id='senha' placeholder="SENHA" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
              </div>
              <div className='no-1'>
              
              <input type='password' maxLength={8} id='senhac' placeholder= "CONFIRMAÇÃO DE SENHA" value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)}></input>
           
              
              </div>
            </div>


            <div className='no-1'>
              
              <label>DATA DE NASCIMENTO</label>
              <input type='date' id='dtna' value={dtNascimento} onChange={(e) => setDtNascimen(e.target.value)}></input>
              
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
              
              <div className='cad'>
               
                <button className='botao'  onclick={inserirUsuario} >Cadastrar</button>

                  {cadastroFeito && (
                    <div className='suce'>
                      Cadastro feito com sucesso!!
                    </div>
                  )

                  }
                <Link className='s' to={'http://localhost:3000/conta'}>
                        Voltar login.
                </Link>
              </div>  
          </div>


        </div>
      </div>

     

    </div>
  );

}