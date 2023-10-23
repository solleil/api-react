import './index.scss';
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [dtNascimento, setDtNascimen] = useState(0);

  const [tipoPele, setTipoPele] = useState(0);
  const [tipoPeleSelecionado, setPeleSelecionado] = useState([]);

  async function listarTiposdePele() {
      
      const r = await axios.get('http://localhost:5000/tipopele')
      setPeleSelecionado(r.data)

  }

  const cadastrar = () => {
    setNome('')
    setSobrenome('');
    setCpf(0);
    setEmail('');
    setSenha(0);
    setConfirmaSenha(0);
    setDtNascimen(0);
    setTipoPele(0);
   
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

          <div className='c-2'>

            <div className='cadastro'>
            <p>CADASTRO</p>
            </div>


            <div className='c-3'>
                
                <div className='no-1'>
                    
                    <input type='Nome'  placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                </div>
              
                <div className='no-1'>
                  
                  <input type='text'  placeholder="Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}></input>
                </div>
             </div>

            <div className='c-4'>
              <div className='no-1'>
              
              <input type='text'  placeholder="CPF" value={cpf} onChange={(e) => setCpf(Number(e.target.value))}></input>
              </div>
              <div className='no-1'>
              
              <input type='text'  placeholder="E-MAIL" value={email} onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div className='no-1'>
              
              <input type='password'  placeholder="SENHA" value={senha} onChange={(e) => setSenha(Number(e.target.value))}></input>
              </div>
              <div className='no-1'>
              
              <input type='password'  placeholder= "CONFIRMAÇÃO DE SENHA" value={confirmaSenha} onChange={(e) => setConfirmaSenha(Number(e.target.value))}></input>
              </div>
            </div>


            <div className='c-5'>
              
              <label>Data Nascimento</label>
              <input type='date' value={dtNascimento} onChange={(e) => setDtNascimen(Number(e.target.value))}></input>
              
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

            <button id='botao'  onclick={cadastrar}>Cadastrar</button>
          </div>


        </div>
      </div>
    </div>
  );
}