
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'
import Cabecalho from '../../../../components/cabecalho';
import Rodape from '../../../../components/rodape';
import './index.scss';
import { InserirEndereco } from '../../../../api/postAPi';
import { MostrarImagem, listarEndereco, listarProdutosFav, listarUsuario } from '../../../../api/getAPI';
import { apagarEndereco } from '../../../../api/deleteAPI';
import { editarEndereco } from '../../../../api/putAPI';
import { toast } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar';
import { InserirCartao } from '../../../../api/postAPi';
import { listarCartao } from '../../../../api/getAPI';
import { editarUsuario } from '../../../../api/putAPI';
import { apagarCartao } from '../../../../api/deleteAPI';
import { editarCartao } from '../../../../api/putAPI';
import { api_url } from '../../../../constats';

export default function Conta() {
  const [enderecoS, setEnderecoS] = useState([]);
  const [produtosfaV, setProdutosfaV] = useState([]);
  const [usuarioInfo, setUsuarioInfo] = useState({})
  const [mostrar, setMostrar] = useState(true);
  const [caminho, setCaminho] = useState(false);
  const [finalizados, setFinalizados] = useState(false);
  const [devolucao, setDevolucao] = useState(false);
  const [mudar, setMudar] = useState(false)
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState(0);
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState(0);
  const [carregando, setCarregando] = useState(false);
  const [cartao, setCartao] = useState(false);
  const [nomeCartao, setNomeCartao] = useState('');
  const [cvcCartao, setCVCCartao] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [validadeCartao, setValidadeCartao] = useState('');
  const [mesValidade, setMesValidade] = useState('')
  const [anoValidade, setanoValidade] = useState('');
  const [mudarPagamento, setMudarPagamento] = useState(false)
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')

  const navigate = useNavigate();

  if (storage('usuario-logado')) {
    var id = storage('usuario-logado').id
  }



  async function cadastrarEndereco() {
    setCarregando(true)
    try {
      if (storage('usuario-logado')) {
        await InserirEndereco(rua, numero, bairro, cidade, cep, id);
        toast.success("Endereço cadastrado com sucesso");
        carregarEndereco(id);
      };

    } catch (err) {
      setCarregando(true)
      toast.error(err.message);
    };
  }

  async function alterarEndereco() {
    setCarregando(false)
    try {
      await editarEndereco(rua, numero, bairro, cidade, cep, id);
      carregarEndereco(id);
      toast.success("Endereço editado com sucesso");
    } catch (err) {
      setCarregando(false);
      toast.error(err.response.data.erro);
    };
  }

  async function alterarCartao() {
    setCarregando(false)
    try {
      setValidadeCartao(`${anoValidade}/${mesValidade}`);
      await editarCartao(nomeCartao, cvcCartao, numeroCartao,validadeCartao,  id)
      carregarCartao(id);
      toast.success("Cartão editado com sucesso");
    } catch (err) {
      setCarregando(false)
        toast.error(err.message);
    }
}

  async function alterarUsuario() {
    try {
      await editarUsuario(nome, sobrenome, telefone, email, cpf, id);
      carregarUsuario(id);
      toast.success("Usuario editado com sucesso");

    } catch (err) {
      setCarregando(false);
      toast.error(err.response.data.erro);
    };
  }
  async function deletarEndereco() {
    setCarregando(false)
    try {
      await apagarEndereco(id);
      carregarEndereco(id);
      toast.success("Endereço excluido com sucesso");
    } catch (err) {
      setCarregando(false);
      toast.error(err.response.data.erro);
    };
  }

  async function deletarCartao() {
    setCarregando(false)
    try {
      await apagarCartao(id);
      carregarCartao(id);
      toast.success("Cartão excluido com sucesso");
    } catch (err) {
      setCarregando(false);
      toast.error(err.response.data.erro);
    };
  }

  async function carregarEndereco() {
    const respo = await listarEndereco(id);
    setEnderecoS(respo);
  }

  async function cadastrarcartao() {
    try {
      setValidadeCartao(`${anoValidade}/${mesValidade}`);
      const id = storage('usuario-logado').id;
      await InserirCartao(nomeCartao, cvcCartao, numeroCartao, validadeCartao, id);
      carregarCartao()
      toast.success("cartão cadastrado com sucesso");
    } catch (err) {
      alert(err.message);
    }
  }

  async function carregarUsuario() {
    const respo = await listarUsuario(id);
    setUsuarioInfo(respo)
  }

  async function carregarCartao() {
    const respo = await listarCartao(id);
    setCartao(respo)
  }

  async function carregarProdutosfav() {
    const respo = await listarProdutosFav();
    setProdutosfaV(respo);
  }

  function carregarImagem(imagem) {
    return `${api_url}/${imagem}`;
  }

  useEffect(() => {
    carregarEndereco()
    carregarUsuario()
    carregarCartao()
    carregarProdutosfav()
  }, []);

  useEffect(() => {
    if (!storage('usuario-logado')) {
      navigate('/login');
    }
  });

  function Mudar() {
    setMostrar(!mostrar)
  }

  function muda() {
    setMudar(!mudar)
  }



  function Mcaminho() {

    setCaminho(!caminho)
    setFinalizados(false)
    setDevolucao(false)
  }

  function Mfinalizados() {

    setCaminho(false)
    setFinalizados(!finalizados)
    setDevolucao(false)
  }

  function Mdevolucao() {

    setCaminho(false)
    setFinalizados(false)
    setDevolucao(!devolucao)
  }


  function MudarP() {
    setMudarPagamento(!mudarPagamento)
  }


  return (
    <div className="pag-conta">
      <Cabecalho />
      <LoadingBar color='#43B541' />
      <div className='s1'>
        <div className='s1-0'> <p>Olá, {usuarioInfo.nome}. </p>  </div>

        <div className='s1-1'>
          <p><b>Seus Pedidos:</b></p>
        </div>

        <div className='s1-2'>

          <button onClick={Mcaminho}>
            <img src='/assets/images/usuario/conta/caminhao.png' alt='' />
            <p>a caminho</p>
          </button>

          <button onClick={Mfinalizados}>
            <img src='/assets/images/usuario/conta/finalizados.png' alt='' />
            <p>finalizados</p>
          </button>

          <button onClick={Mdevolucao}>
            <img src='/assets/images/usuario/conta/caixa2.png' alt='' />
            <p>devolução</p>
          </button>



        </div>

        <div className='s1-2-open'>

          {caminho === true &&
            <>
              <table>
                <thead></thead>
                <tbody>

                  <td>oi</td>
                  <th>teste</th>
                </tbody>
              </table>
            </>
          }
          {finalizados === true &&
            <>
              <div>
                <p>futura tabela</p>
              </div>
            </>
          }
          {devolucao === true &&
            <>
              <div>
                <p>futura tabela</p>
              </div>
            </>
          }
        </div>


      </div>


      <div className='linha'>.</div>

      <div className='s2'>

        <div className='s2-1'>
          <p className='e'>Dados pessoais:</p>
          <p className='p' onClick={muda} >editar <img src='/assets/images/usuario/conta/editar.png' alt='' /></p>
        </div>
        <div className='s2-2'>
          <p> <b>Nome:</b> {`${usuarioInfo.nome} ${usuarioInfo.sobrenome}.`}</p>
          <p> <b>Telefone:</b> {usuarioInfo.telefone}</p>
          <p> <b>Email:</b> {usuarioInfo.email}</p>
          <p> <b>CPF:</b> {usuarioInfo.cpf}</p>
        </div>
        {mudar === false &&
          <>
          </>}

        {mudar === true &&
          <div className='s2-3'>

            <div className='s2-4'>

              <input className='dnt' type='text' placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)}></input>
              <input className='dnt' type='text' placeholder='Sobrenome' value={sobrenome} onChange={e => setSobrenome(e.target.value)}></input>

            </div>

            <div className='s2-5'>
              <input className='dnt' type='text' placeholder='Telefone' value={telefone} onChange={e => setTelefone(e.target.value)}></input>
              <input className='dnt' type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}></input>
              <input className='dnt' type='text' placeholder='Cpf' value={cpf} onChange={e => setCpf(e.target.value)}></input>
            </div>

            <div className='s2-6'>
              <button onClick={alterarUsuario}> <img src='/assets/images/usuario/conta/editar.png' alt='' />  </button>
            </div>

          </div>
        }

      </div>


      <div className='linha'>.</div>

      <div className='s3'>

        <div className='s3-1'>
          <b>Endereços</b>
          <p className='p' onClick={Mudar}>Adicionar ou Editar <img className='i' src='/assets/images/usuario/conta/editar.png' alt='' /></p>
        </div>

        <div className='s3-lado'>
          {enderecoS.map((item) =>
            <div className='s3-2' key={item.id}>
              <p><b>Rua:</b> {item.rua} </p> <p><b>Nº</b> {item.endereco} </p> <p><b>Bairro: </b>{item.bairro} </p> <p><b>Cidade:</b> {item.cidade} </p>
              <p> <b>Cep:</b>{item.cep} </p>
            </div>
          )}

          {mostrar === true &&
            <>
              <div className='s3-3'>
                <input type='text' placeholder='rua' className='rua' onChange={(e) => setRua(e.target.value)} />
                <input type='text' placeholder='nº' className='numero' onChange={(e) => setNumero(e.target.value)} />
                <input type='text' placeholder='bairro' className='bairro' onChange={(e) => setBairro(e.target.value)} />
                <input type='text' placeholder='cidade' className='cidade' onChange={(e) => setCidade(e.target.value)} />
                <input type='text' placeholder='cep' className='cep' onChange={(e) => setCep(e.target.value)} />

                <button onClick={cadastrarEndereco} disabled={carregando}> <img src='/assets/images/usuario/conta/salvar.png' alt='' />  </button>
                <button onClick={alterarEndereco}> <img src='/assets/images/usuario/conta/editar.png' alt='' />  </button>
                <button onClick={deletarEndereco}> <img src='/assets/images/usuario/conta/excluir.png' alt='' />  </button>
              </div>
            </>}


        </div>







      </div>



      <div className='linha'>.</div>

      <div className='s3-1'>
        <b>dados do cartão</b>
        <p className='p' onClick={Mudar}>adicionar ou editar <img className='i' src='/assets/images/usuario/conta/editar.png' alt='' /></p>
      </div>

      <div className='s3-lado'>

            <div className='s3-2'>
              <p><b>nome no cartão:</b> {cartao.nome}</p> 
              <p><b>número do cartão:</b> {cartao.numero}</p> 
              <p><b>validade:</b> {cartao.validade}</p>
              <p><b>código de segurança:</b> {cartao.cvc}</p>
            </div>



        {mostrar === false &&
          <>
          </>}

        {mostrar === true &&
          <>
            <div className='s3-6'>
              <input type='text' placeholder='nome no cartão' className='rua' value={nomeCartao} onChange={(e) => setNomeCartao(e.target.value)} />
              <input type='text' placeholder='número do cartão' className='numero' value={numeroCartao} onChange={(e) => setNumeroCartao(e.target.value)} />
              <select className='bairro' value={mesValidade} onChange={(e) => setMesValidade(e.target.value)}>
                <option value={0}>mês</option>
                <option value={1}>janeiro</option>
                <option value={2}>fevereiro</option>
                <option value={3}>março</option>
                <option value={4}>abril</option>
                <option value={5}>maio</option>
                <option value={6}>junho</option>
                <option value={7}>julho</option>
                <option value={8}>agosto</option>
                <option value={9}>setembro</option>
                <option value={10}>outubro</option>
                <option value={11}>novembro</option>
                <option value={12}>dezembro</option>
              </select>
              <select className='cidade' value={anoValidade} onChange={(e) => setanoValidade(e.target.value)}>
                <option value={0}>ano</option>
                <option value={24}>2024</option>
                <option value={25}>2025</option>
                <option value={26}>2026</option>
                <option value={27}>2027</option>
                <option value={28}>2028</option>
                <option value={29}>2029</option>
                <option value={30}>2030</option>
              </select>
              <input id='cod' value={cvcCartao} onChange={(e) => setCVCCartao(e.target.value)} type='text' className='o' placeholder='código de segurança' />

              <button onClick={cadastrarcartao} > <img src='/assets/images/usuario/conta/salvar.png' alt='' />  </button>
              <button onClick={alterarCartao}> <img src='/assets/images/usuario/conta/editar.png' alt='' />  </button>
              <button onClick={deletarCartao} > <img src='/assets/images/usuario/conta/excluir.png' alt='' />  </button>
            </div>
          </>}


      </div>
      <div className='linha'>.</div>

      <div className='s4'>
        <div className='s4-1'>
          <p><b>Favoritos</b> <img alt='' src='/assets/images/usuario/conta/fav.png' /> </p>

        </div>

        <div className='s4-2'>
          {produtosfaV.map((item) =>
            <div className='s6-1-p'>
              <img src={MostrarImagem(item.imagem)} alt='' />
              <p>{item.nome}</p> <p>{item.preco}</p>
            </div>
          )}
        </div>


      </div>

      <Rodape />

    </div>
  );
}