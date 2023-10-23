

import { useState } from 'react';
import Cabecalho from '../../../../components/cabecalho';
import Rodape from '../../../../components/rodape';
import './index.scss';


export default function Info() {

  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [result, setResult] = useState(0)
  const [indic, setIndic] = useState(false);
  const [comprov, setComprov] = useState(false);
  const [avalia, setAvalia] = useState(false);
  const [ingredientesatv, setIngrentesatv] = useState(false);

  function mudarI() {
    setIndic(!indic)

    setComprov(false)
    setAvalia(false)
    setIngrentesatv(false)
  }
  function mudarC() {
    setComprov(!comprov)

    setIndic(false)
    setAvalia(false)
    setIngrentesatv(false)


  }
  function mudarA() {
    setAvalia(!avalia)

    setComprov(false)
    setIndic(false)
    setIngrentesatv(false)


  }
  function mudarIng() {
    setIngrentesatv(!ingredientesatv)

    setComprov(false)
    setIndic(false)
    setAvalia(false)

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
        <img className='exemplo' src='/assets/images/usuario/info/exemplo.png' alt='' />

        <div className='info'>
          <div className='limpador'><h2>limpador facial sallve</h2></div>
          <div className='pl-limpa'><h3>para uma pele limpa e hidratada.</h3></div>
          <div className='vl-desconto'>
            <div ><h3>R$ 79,90</h3></div>
            <div ><h4>ou 3x de R$26,63</h4></div>
          </div>
          <div className='estrelas'>
            <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' />
            <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' />
            <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' />
            <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' />
            <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' />
          </div>

          <div className='disp'>
            <img className='disponivel' src='/assets/images/usuario/info/direito 1.png' alt='' />
            <h5>disponivel no estoque</h5>
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
            <button> adicionar a sacola</button>
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
          {avalia ? (<b onClick={mudarA} className='bold'>avaliações <div className='bold-linhas3'></div>  </b>) : (<p onClick={mudarA} className='n-bold'>avaliações </p>)}
          {ingredientesatv ? (<b onClick={mudarIng} className='bold'>ingredientes ativos <div className='bold-linhas4'></div>  </b>) : (<p onClick={mudarIng} className='n-bold'>ingredientes ativos </p>)}
        </div> 
        <div className='linhas'></div>


      <div className='opc-info'>

       
        <div>

          {indic === true &&
            <>
              <div className='indica'>

                <img className='indica-s1' src='/assets/images/usuario/info/indica.png' alt='' />
                <h3>Todos os tipos de pele</h3>

              </div>

              <div className='indica-s2'>

                <div className='indc-s1'>
                  <img className='indica-png' src='/assets/images/usuario/info/opcoes.png' alt='' />
                  <p>Melhora o aspecto da pele</p>
                </div>

                <div className='indc-s2'>
                  <img className='indica-png' src='/assets/images/usuario/info/opcoes.png' alt='' />
                  <p>Reduz a oleosidade</p>
                </div>

                <div className='indc-s3'>
                  <img className='indica-png' src='/assets/images/usuario/info/opcoes.png' alt='' />
                  <p>Promove a maciez da pele</p>
                </div>

                <div className='indc-s4'>
                  <img className='indica-png' src='/assets/images/usuario/info/opcoes.png' alt='' />
                  <p>Antipoluição</p>
                </div>


              </div>


            </>}

        </div>






        <div>

          {comprov === true &&
            <>
              <div className='comprova'>

                <p>o Limpador Facial passou por uma série de estudos clínicos que garantem a<br /> segurança do produto:<br />
                  <b>Dermatologicamente testado em pele sensível -</b> produto seguro para ser<br /> aplicado sobre a pele;<br />
                  <b>Oftalmologicamente testado -</b>  produto seguro para ser aplicado, com os<br /> olhos fechados;<br />
                  <b>Não-fototóxico e não-sensibilizante -</b>  o produto não causa irritação/<br />sensibilização na pele;Não-comedogênico - o produto não promoveu aumento em<br /> comedões abertos e fechados, nem em pápulas e pústulas;<br />
                  <b>Hipoalergênico -</b>  o produto não induziu processo de irritação e sensibilização<br /> cutânea em nenhum voluntário durante o período de estudo.
                </p>


              </div>
            </>}

        </div>



        <div>


          {avalia === true &&
            <>
              <div className='avaliac'>

               <div className='star'>
                <div className='av-s1'>
                  <img className='estrelaa' src='/assets/images/usuario/info/estrela 1.png' alt='' />
                  <img className='estrelaa' src='/assets/images/usuario/info/estrela 1.png' alt='' />
                  <img className='estrelaa' src='/assets/images/usuario/info/estrela 1.png' alt='' />
                  <img className='estrelaa' src='/assets/images/usuario/info/estrela 1.png' alt='' />
                  <img className='estrelaa' src='/assets/images/usuario/info/estrela 1.png' alt='' />
                  <p>52</p>
                </div>

                <div className='av-s2'>
                  <img className='estrelaa' src='/assets/images/usuario/info/estrela 1.png' alt='' />
                  <img className='estrelaa' src='/assets/images/usuario/info/estrela 1.png' alt='' />
                  <img className='estrelaa' src='/assets/images/usuario/info/estrela 1.png' alt='' />
                  <img className='estrelaa' src='/assets/images/usuario/info/estrela 1.png' alt='' />
                  <p>20</p>
                </div>

                <div className='av-s3'>
                  <img className='estrelaa' src='/assets/images/usuario/info/estrela 1.png' alt='' />
                  <img className='estrelaa' src='/assets/images/usuario/info/estrela 1.png' alt='' />
                  <img className='estrelaa' src='/assets/images/usuario/info/estrela 1.png' alt='' />
                  <p>4</p>
                </div>

                <div className='av-s4'>
                  <img className='estrelaa' src='/assets/images/usuario/info/estrela 1.png' alt='' />
                  <img className='estrelaa' src='/assets/images/usuario/info/estrela 1.png' alt='' />
                  <p>2</p>
                </div>
                

                <div className='av-s5'>
                  <img className='estrelaa' src='/assets/images/usuario/info/estrela 1.png' alt='' />
                  <p>1</p>
                </div>
              </div>
                <div className='avc'>
                  <div className='avc-s1'>
                    <img className='avcp' src='/assets/images/geral/estrelap.png' alt='' />
                    <h2>Avaliações</h2>
                  </div>

                  <div className='avc-s2'>
                    <img className='avcpf' src='/assets/images/geral/perfil.png' alt='' />
                    <p>Produto incrivel, entrega totalmente rapida nota 10</p>
                    <img id='final' className='avcimg' src='/assets/images/geral/estrelat.png' alt='' />
                    <p id='final'>5.0</p>
                  </div>

                  <div className='avc-s2'>
                    <img className='avcpf' src='/assets/images/geral/perfil.png' alt='' />
                    <p>Eu ameiiiiiii, produto maravilhoso entrega rapida! super<br /> recomendo comprem.</p>
                    <img id='final' className='avcimg' src='/assets/images/geral/estrelat.png' alt='' />
                    <p id='final' >5.0</p>
                  </div>

                  <div className='avc-s2'>
                    <img className='avcpf' src='/assets/images/geral/perfil.png' alt='' />
                    <p>Não sabia que esse produto era tão bom, simplesmente<br /> comprem.</p>
                    <img id='final' className='avcimg' src='/assets/images/geral/estrelat.png' alt='' />
                    <p id='final'>5.0</p>

                  </div>


                </div>


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
                <p>um dos ingredientes mais versáteis que existem: aqui a niacinamida tem ação anti-<br/>inflamatória, melhora a textura e regula a produção de sebo. ao mesmo tempo,<br/> fortalece a proteção da pele, evitando ressecamento e vermelhidão.</p> 
              </div>

              <div className='igd-s2'>
                <div className='igd'>
                <div className='bolinha'> <img src='/assets/images/geral/bolinha.png' alt='' /></div>
                <b>extrato de moringa</b>
                </div>
                <p>derivado natural da moringa oleifera, o extrato promove a limpeza profunda da pele<br/> removendo até mesmo resíduos de poluição diária.</p> 
              </div>

              <div className='igd-s3'>
                <div className='igd'>
                <div className='bolinha'> <img src='/assets/images/geral/bolinha.png' alt='' /></div>
                <b>phytoesqualano</b>
                </div>
                <p>de origem vegetal, derivado do óleo de oliva puro, sua alta compatibilidade com a<br/> pele ajuda a restaurar a barreira de proteção e a manter a maciez.</p> 
              </div>

              <div className='igd-s4'>
                <div className='igd'>
                <div className='bolinha'> <img src='/assets/images/geral/bolinha.png' alt='' /></div>
                <b>pantenol</b>
                </div>
                <p>também chamado de Pro-Vitamina B5, é conhecido pelo seu poder hidratante e<br/> suavizante, promove ação calmante e anti-inflamatória.</p> 
              </div>





              </div>
            </>}

        </div>




      </div>
</div>

    
    <Rodape/>
    </div>
 







  );
}