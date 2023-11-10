import { useState, useEffect } from 'react';
import storage from 'local-storage'
import Cabecalho from '../../../../components/cabecalho';
import Rodape from '../../../../components/rodape';
import './index.scss';
import { CadastrarUsuario, InserirEndereco } from '../../../../api/postAPi';
import { listarEndereco, listarTiposdePele } from '../../../../api/getAPI';

export default function Conta() {
  const [enderecoS, setEnderecoS] = useState([]);
  const [tiposPeleS, setTiposPeleS] = useState([]);
  const [usuarioInfo, setUsuarioInfo] = useState([])
  const [mostrar, setMostrar] = useState(true);
  const [npagos, setNpagos] = useState(false);
  const [processando, setProcessando] = useState(false);
  const [caminho, setCaminho] = useState(false);
  const [finalizados, setFinalizados] = useState(false);
  const [devolucao, setDevolucao] = useState(false);
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState(0);
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState(0);



  const [ nome, setNome ] = useState('')
  const [ sobrenome, setSobrenome ] = useState('')
  const [ tipopele, setTipopele ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ cpf, setCpf ] = useState('')
  const [ telefone, setTelefone ] = useState('')




  async function cadastrarEndereco() {
    try {
      const id = storage('usuario-logado').id;
      const resposta = await InserirEndereco(rua, numero, bairro, cidade, cep, id);
      alert("Endereço cadastrado com sucesso");

    } catch (err) {
      alert(err.message);
    };
  }

  async function carregarEndereco() {
    const id = storage('usuario-logado').id;
    const respo = await listarEndereco(id);
    setEnderecoS(respo);
  }

  async function carregarTiposPele() {
    const respo = await listarTiposdePele();
    setTiposPeleS(respo);
  }

  useEffect(() => {
    carregarEndereco()
    carregarTiposPele()
  }, [])



  function Mudar() {
    setMostrar(!mostrar)
  }

  function Mpagos() {
    setNpagos(!npagos)

    setProcessando(false)
    setCaminho(false)
    setFinalizados(false)
    setDevolucao(false)
  }

  function Mprocessando() {
    setNpagos(false)

    setProcessando(!processando)
    setCaminho(false)
    setFinalizados(false)
    setDevolucao(false)
  }

  function Mcaminho() {
    setNpagos(false)

    setProcessando(false)
    setCaminho(!caminho)
    setFinalizados(false)
    setDevolucao(false)
  }

  function Mfinalizados() {
    setNpagos(false)

    setProcessando(false)
    setCaminho(false)
    setFinalizados(!finalizados)
    setDevolucao(false)
  }

  function Mdevolucao() {
    setNpagos(false)

    setProcessando(false)
    setCaminho(false)
    setFinalizados(false)
    setDevolucao(!devolucao)
  }



  return (

    <div className="pag-conta">
      <Cabecalho />

      <div className='s1'>
        <p>Olá, </p>

        <div className='s1-1'>
          <p>seus pedidos:</p>
          <a href='coloca sempre o Href com alguma coisa, letras, sla, pls'>
            veja tudo  <img src='/assets/images/usuario/inicial/seta.png' alt='' />
          </a>
        </div>

        <div className='s1-2'>

          <button onClick={Mpagos}>
            <img src='/assets/images/usuario/conta/carteira.png' alt='' />
            <p>não pagos</p>
          </button>

          <button onClick={Mprocessando}>
            <img src='/assets/images/usuario/conta/caixa.png' alt='' />
            <p>processando</p>
          </button>

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
          {npagos === true &&
            <>
              <div>
                <p>futura tabela</p>
              </div>
            </>
          }

          {processando === true &&
            <>
              <div>
                <p>futura tabela</p>
              </div>
            </>
          }
          {caminho === true &&
            <>
              <div>
                <p>futura tabela</p>
              </div>
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
          <p>dados pessoais:</p>
          <p className='p' >editar <img src='/assets/images/usuario/conta/editar.png' alt='' /></p>
        </div>

        <div className='s2-2'>
       


        </div>

      </div>


      <div className='linha'>.</div>

      <div className='s3'>

        <div className='s3-1'>
          <p>endereços</p>
          <p className='p' onClick={Mudar}>adicionar ou editar <img src='/assets/images/usuario/conta/editar.png' alt='' /></p>
        </div>

        <div className='s3-lado'>
          {enderecoS.map((item) =>
            <div className='s3-2'>
              <p>Rua: {item.rua} </p> <p>Nº {item.endereco} </p> <p>Bairro: {item.bairro} </p> <p>Cidade: {item.cidade} </p>
              <p> Cel: *** </p> <p>Cep: {item.cep} </p>
            </div>
          )}


          {mostrar === false &&
            <>
            </>}

          {mostrar === true &&
            <>
              <div className='s3-3'>
                <input type='text' placeholder='rua' className='rua' onChange={(e) => setRua(e.target.value)} />
                <input type='text' placeholder='nº' className='numero' onChange={(e) => setNumero(e.target.value)} />
                <input type='text' placeholder='bairro' className='bairro' onChange={(e) => setBairro(e.target.value)} />
                <input type='text' placeholder='cidade' className='cidade' onChange={(e) => setCidade(e.target.value)} />
                <input type='text' placeholder='cep' className='cep' onChange={(e) => setCep(e.target.value)} />

                <button onClick={cadastrarEndereco}> <img src='/assets/images/usuario/conta/salvar.png' alt='' />  </button>
                <button> <img src='/assets/images/usuario/conta/editar.png' alt='' />  </button>
                <button> <img src='/assets/images/usuario/conta/excluir.png' alt='' />  </button>
              </div>
            </>}


        </div>







      </div>



      <div className='linha'>.</div>

      <div className='s4'>
        <div className='s4-1'>
          <p>favoritos <img alt='' src='/assets/images/usuario/conta/fav.png' /> </p>

        </div>

        <div className='s4-2'>

          <div className='s6-1-p'>

            <img src='/assets/images/usuario/iniprodutos/s2-2.png' alt='' />
            <p>  WATER SLEEPING MASK </p>  <p>
              <b> R$28,90 </b> ou 3x R$10,28 </p>
          </div>
          <div className='s6-1-p'>

            <img src='/assets/images/usuario/iniprodutos/s2-1.png' alt='' />
            <p>  LIMPADOR ANTIACNE </p>  <p>
              <b> R$54,90 </b> ou 5x R$10,28 </p>
          </div>
          <div className='s6-1-p'>

            <img src='/assets/images/usuario/iniprodutos/s2-2.png' alt='' />
            <p>  WATER SLEEPING MASK </p>  <p>
              <b> R$28,90 </b> ou 3x R$10,28 </p>
          </div>
          <div className='s6-1-p'>

            <img src='/assets/images/usuario/iniprodutos/s2-1.png' alt='' />
            <p>  LIMPADOR ANTIACNE </p>  <p>
              <b> R$54,90 </b> ou 5x R$10,28 </p>
          </div>

          <img src='/assets/images/usuario/conta/seta.png' alt='' className='seta' />

        </div>

      </div>






      <Rodape />


    </div>
  );
}