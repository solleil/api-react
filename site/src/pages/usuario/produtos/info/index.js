import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { listarProdutosId } from '../../../../api/getAPI';
import Cabecalho from '../../../../components/cabecalho';
import Rodape from '../../../../components/rodape';
import './index.scss';
import { api_url } from '../../../../constats';
import storage from 'local-storage';
import {toast} from 'react-toastify';


export default function Info() {
  const [produtO, setProdutO] = useState({});
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [result, setResult] = useState(0);
  const [indic, setIndic] = useState(true);
  const [comprov, setComprov] = useState(false);
  const [ingredientesatv, setIngrentesatv] = useState(false);

  const { idParams } = useParams();

  async function carregarProduto() {
    const respo = await listarProdutosId(idParams)
    setProdutO(respo);
  }

  function carregarImagem() {
    return `${api_url}/${produtO.imagem}`;
  }

  useEffect(() => {
    carregarProduto()
  }, [])

  function mudarI() {
    setIndic(!indic)

    setComprov(false)
    setIngrentesatv(false)
  }
  function mudarC() {
    setComprov(!comprov)

    setIndic(false)
    setIngrentesatv(false)


  }
 
  function mudarIng() {
    setIngrentesatv(!ingredientesatv)

    setComprov(false)
    setIndic(false)
   

  }

  function AdicionarCarrinho(){
    let carrinho = [];
    if(storage('carrinhosolleil')){
      carrinho = storage('carrinhosolleil')
    }

    if(!carrinho.find(item => item.id === idParams)){
        carrinho.push({
          id: idParams,
          qtd: 1
        })
        storage('carrinhosolleil', carrinho);
    }
    toast.success('produto adicionado ao carrinho')
  }

  function mais() {
    let x = result + 1
    setResult(x)
  }
  function menos() {
    if (result > 0) {
      let x = result - 1
      setResult(x)
    }

  }

  return (
    <div className="pag-info">
      <Cabecalho />
      <div className='td-info'>
        <img className='exemplo' src={carregarImagem()} alt='' />
        <div className='info'>
          <div className='limpador'><h2>{produtO.nome}</h2></div>
          <div className='pl-limpa'><h3>para uma pele limpa e hidratada.</h3></div>
          <div className='vl-desconto'>
            <div className='valor'><h3>R$ {produtO.preco}</h3></div>
            
          </div>
          <div className='estrelas'>
            <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' />
            <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' />
            <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' />
            <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' />
            <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' />
            <h3>4.8</h3>
          </div>

          <div className='disp'>
            <img className='disponivel' src='/assets/images/usuario/info/direito 1.png' alt='' />
            <h5 className='text-disp'>disponivel no estoque</h5>
          </div>


          <div>
            <div className='tamanhos-info'>  <h4>outros tamanhos disponíveis:</h4></div>
            <div className='ml-1' >
              <button className='ml'> 300ml  </button>
              <button className='ml' > 160ml </button>
              <button className='ml' > 60ml </button>
            </div>

          </div>

          <div className='qtd'>
            <div className='qtd-info'>
              <button type='number' value={n1} onChange={(e) => setN1(Number(e.target.value))} onClick={menos}> <img src='/assets/images/geral/-.png' alt='a' /></button>
              <p value={result} onChange={(e) => setResult(Number(e.target.value))}> {result}</p>
              <button type='number' value={n2} onChange={(e) => setN2(Number(e.target.value))} onClick={mais}> <img src='/assets/images/geral/+.png' alt='' /></button>
            </div>


          </div>

          <div className='add-info'>
            <button onClick={AdicionarCarrinho} className='ad'> adicionar a sacola</button>
            <div>
              <img className='coracao-info' src='/assets/images/usuario/info/image 22.png' alt='' />
            </div>

          </div>



        </div>

      </div>

      <div className='s6'>
        <div className='opc-1'>

          {indic ? (<b onClick={mudarI} className='bold'>indicações <div className='bold-linhas1'></div>  </b>) : (<p onClick={mudarI} className='n-bold'>indicações </p>)}
          {comprov ? (<b onClick={mudarC} className='bold'>comprovações<div className='bold-linhas2'></div>  </b>) : (<p onClick={mudarC} className='n-bold'>comprovações </p>)}
          {ingredientesatv ? (<b onClick={mudarIng} className='bold'>ingredientes ativos <div className='bold-linhas4'></div>  </b>) : (<p onClick={mudarIng} className='n-bold'>ingredientes ativos </p>)}
        </div>
        <div className='linhas'></div>


        <div className='opc-info'>


          <div>

            {indic === true &&
              <>
                <div className='indica'>

                  <img className='indica-s1' src='/assets/images/usuario/info/indica.png' alt='' />
                  <p className='tdp'>Todos os tipos de pele</p>

                </div>

                <div className='indica-s2'>

                  <div className='indc-s1'>
                    <img className='indica-png' src='/assets/images/usuario/info/opcoes.png' alt='' />
                    <p className='pi'>Melhora o aspecto da pele</p>
                  </div>

                  <div className='indc-s2'>
                    <img className='indica-png' src='/assets/images/usuario/info/opcoes.png' alt='' />
                    <p className='pi'>Reduz a oleosidade</p>
                  </div>

                  <div className='indc-s3'>
                    <img className='indica-png' src='/assets/images/usuario/info/opcoes.png' alt='' />
                    <p className='pi'>Promove a maciez da pele</p>
                  </div>

                  <div className='indc-s4'>
                    <img className='indica-png' src='/assets/images/usuario/info/opcoes.png' alt='' />
                    <p className='pi'>Antipoluição</p>
                  </div>


                </div>


              </>}

          </div>






          <div>

            {comprov === true &&
              <>
                <div className='comprova'>
                  <p>{produtO.descricao}</p>
                </div>
              </>}

          </div>



    


        


          <div>

            {ingredientesatv === true &&
              <>
                <div className='ingred'>

                  <div className='igd-s1'>
                    <div className='igd'>
                      <div className='bolinha'> <img src='/assets/images/geral/bolinha.png' alt='' /></div>
                      <b>niacinamida</b>
                    </div>
                    <p>um dos ingredientes mais versáteis que existem: aqui a niacinamida tem ação anti-<br />inflamatória, melhora a textura e regula a produção de sebo. ao mesmo tempo,<br /> fortalece a proteção da pele, evitando ressecamento e vermelhidão.</p>
                  </div>

                  <div className='igd-s2'>
                    <div className='igd'>
                      <div className='bolinha'> <img src='/assets/images/geral/bolinha.png' alt='' /></div>
                      <b>extrato de moringa</b>
                    </div>
                    <p>derivado natural da moringa oleifera, o extrato promove a limpeza profunda da pele<br /> removendo até mesmo resíduos de poluição diária.</p>
                  </div>

                  <div className='igd-s3'>
                    <div className='igd'>
                      <div className='bolinha'> <img src='/assets/images/geral/bolinha.png' alt='' /></div>
                      <b>phytoesqualano</b>
                    </div>
                    <p>de origem vegetal, derivado do óleo de oliva puro, sua alta compatibilidade com a<br /> pele ajuda a restaurar a barreira de proteção e a manter a maciez.</p>
                  </div>

                  <div className='igd-s4'>
                    <div className='igd'>
                      <div className='bolinha'> <img src='/assets/images/geral/bolinha.png' alt='' /></div>
                      <b>pantenol</b>
                    </div>
                    <p>também chamado de Pro-Vitamina B5, é conhecido pelo seu poder hidratante e<br /> suavizante, promove ação calmante e anti-inflamatória.</p>
                  </div>
                </div>
              </>}
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}