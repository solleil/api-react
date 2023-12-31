import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { listarProdutosId } from '../../../../api/getAPI';
import Cabecalho from '../../../../components/cabecalho';
import Rodape from '../../../../components/rodape';
import './index.scss';
import { api_url } from '../../../../constats';
import storage from 'local-storage';
import { toast } from 'react-toastify';
import { favoritarProduto } from '../../../../api/putAPI';


export default function Info() {
  const [produtO, setProdutO] = useState({});
  const [indic, setIndic] = useState(true);
  const [comprov, setComprov] = useState(false);
  const [ingredientesatv, setIngrentesatv] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const { idParams } = useParams();

  async function carregarProduto() {
    const respo = await listarProdutosId(idParams)
    setProdutO(respo);
  }

  function carregarImagem() {
    return `${api_url}/${produtO.imagem}`;
  }

  useEffect(() => {
    carregarProduto();
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

  function AdicionarCarrinho() {
    let carrinho = [];
    if (storage('carrinhosolleil')) {
      carrinho = storage('carrinhosolleil')
    }

    if (!carrinho.find(item => item.id === idParams)) {
      carrinho.push({
        id: idParams,
        qtd: 1
      })
      storage('carrinhosolleil', carrinho);
    }
    toast.success('produto adicionado ao carrinho')
  }

  async function fav() {
    await favoritarProduto(idParams, 1);
    toast.success('Produto marcado como Favorito');
    setCarregando(true);
  }

  function forcarClick() {
    document.getElementById('botfav').click();
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
          <div className='disp'>

            {produtO.disponivel === 1 &&
              <h5 className='text-disp'>Disponivel no estoque</h5>}
            {produtO.disponivel === 0 &&
              <h5 className='text-disp'>Indisponivel no estoque</h5>}

          </div>






          <div className='add-info'>
            <button onClick={AdicionarCarrinho} className='ad'> adicionar a sacola</button>
            <div onClick={forcarClick}>
              <img className='coracao-info' src='/assets/images/usuario/info/image 22.png' alt='' />
              <button id='botfav' onClick={fav} disabled={carregando}></button>
            </div>

          </div>



        </div>

      </div>

      <div className='s6'>
        <div className='opc-1'>

          {indic ? (<b onClick={mudarI} className='bold'>indicações <div className='bold-linhas1'></div>  </b>) : (<p onClick={mudarI} className='n-bold'>indicações </p>)}
          {comprov ? (<b onClick={mudarC} className='bold'>descrição<div className='bold-linhas2'></div>  </b>) : (<p onClick={mudarC} className='n-bold'>Descrição </p>)}
          {ingredientesatv ? (<b onClick={mudarIng} className='bold'>ingredientes ativos <div className='bold-linhas4'></div>  </b>) : (<p onClick={mudarIng} className='n-bold'>ingredientes ativos </p>)}
        </div>
        <div className='linhas'></div>


        <div className='opc-info'>


          <div>

            {indic === true &&
              <>
                <div className='indica'>

                  <img className='indica-s1' src='/assets/images/usuario/info/indica.png' alt='' />
                  <p className='tdp'>{produtO.indicacao}</p>

                </div>
              </>}

          </div>






          <div>

            {comprov === true &&
              <>
                <div className='comprova'>
                  <p >{produtO.descricao}</p>
                </div>
              </>}

          </div>

          <div>

            {ingredientesatv === true &&
              <>
                <div className='ingred'>
                  {produtO.ingrediente_atv === 1 &&
                    <div className='igd-s1'>
                      <div className='igd'>
                        <div className='bolinha'> <img src='/assets/images/geral/bolinha.png' alt='' /></div>
                        <b>niacinamida</b>
                      </div>
                      <p>um dos ingredientes mais versáteis que existem: aqui a niacinamida tem ação anti-<br />inflamatória, melhora a textura e regula a produção de sebo. ao mesmo tempo,<br /> fortalece a proteção da pele, evitando ressecamento e vermelhidão.</p>
                    </div>
                  }
                  {produtO.ingrediente_atv === 2 &&
                    <div className='igd-s2'>
                      <div className='igd'>
                        <div className='bolinha'> <img src='/assets/images/geral/bolinha.png' alt='' /></div>
                        <b>extrato de moringa</b>
                      </div>
                      <p>derivado natural da moringa oleifera, o extrato promove a limpeza profunda da pele<br /> removendo até mesmo resíduos de poluição diária.</p>
                    </div>
                  }
                  {produtO.ingrediente_atv === 3 &&
                    <div className='igd-s3'>
                      <div className='igd'>
                        <div className='bolinha'> <img src='/assets/images/geral/bolinha.png' alt='' /></div>
                        <b>phytoesqualano</b>
                      </div>
                      <p>de origem vegetal, derivado do óleo de oliva puro, sua alta compatibilidade com a<br /> pele ajuda a restaurar a barreira de proteção e a manter a maciez.</p>
                    </div>
                  }
                  {produtO.ingrediente_atv === 4 &&
                    <div className='igd-s4'>
                      <div className='igd'>
                        <div className='bolinha'> <img src='/assets/images/geral/bolinha.png' alt='' /></div>
                        <b>pantenol</b>
                      </div>
                      <p>também chamado de Pro-Vitamina B5, é conhecido pelo seu poder hidratante e<br /> suavizante, promove ação calmante e anti-inflamatória.</p>
                    </div>
                  }
                </div>
              </>}
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}