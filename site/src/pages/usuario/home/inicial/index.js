import { useState } from 'react';
import './index.scss';
import Cabecalho from '../../../../components/cabecalho'
import Rodape from '../../../../components/rodape';
import Carrossel from '../../../../components/carrossel'
import { Link } from 'react-router-dom';


export default function Inicial() {
  const [mostrar, setMostrar] = useState(false)
  

 

  const [mostrarChat, setMostrarChat] = useState(false)
  const [chat, setChat] = useState(false)

  const [mensagem, setMensagem] = useState('')
  const [msg, setMsg] = useState('')
  

  function mensagemClick(){
    if (mensagem === 1){
      setMsg(<div className='mensagem'>Cuidar da pele requer uma rotina que envolve diversas etapas. Comece com a limpeza para remover impurezas, siga com a tonificação para equilibrar o pH da pele, hidrate para mantê-la saudável, aplique protetor solar para evitar danos causados pelo sol e considere produtos específicos para necessidades individuais, como acne ou envelhecimento. A consistência na aplicação desses passos é crucial para alcançar resultados satisfatórios a longo prazo, e uma consulta com um dermatologista pode fornecer orientações personalizadas. Cuidar da pele diariamente é uma prática importante para a saúde e a autoestima.</div>)
    }
    else if(mensagem === 2){
      setMsg(<div className='mensagem'><b>Uso diário: </b> Aplique protetor solar com FPS adequado todos os dias, independentemente do clima.
<br></br>
        <b>  Reaplicação:</b> Reforce a proteção a cada 2 horas, principalmente ao ar livre.
        <br></br>
       <b>Amplo espectro:</b>  Escolha protetores que cubram UVA e UVB.
       <br></br>
        <b>Roupas e acessórios:</b> Use roupas com cobertura e óculos de sol para proteção extra.
        <br></br>
        <b>Evite o sol forte: </b>Fique na sombra entre 10h e 16h.
        <br></br>
        <b>Proteja os olhos:</b> Use óculos de sol com proteção UV.
        <br></br>
        <b>Hidratação:</b> Após a exposição, hidrate bem a pele.
        <br></br>
        <b>Autoexames:</b> Esteja atento a mudanças na pele e consulte um dermatologista se necessário.
        <br></br>
        <b>Proteção completa:</b> Não esqueça de áreas negligenciadas, como orelhas, pescoço e mãos.</div>)
    }
    else if(mensagem === 3){
      setMsg(<div className='mensagem'>
        Na nossa loja de skincare, estamos comprometidos com a ética e a responsabilidade, o que inclui a decisão consciente de não oferecer produtos de marcas que realizam testes em animais. Acreditamos que a beleza e cuidados com a pele não devem vir à custa do sofrimento dos animais. Escolhemos marcas que compartilham dessa filosofia e que se empenham em desenvolver produtos de alta qualidade, sem comprometer o bem-estar dos animais. Ao fazer essa escolha, não apenas estamos contribuindo para um mundo mais compassivo, mas também oferecendo aos nossos clientes a confiança de que nossos produtos atendem aos mais altos padrões éticos e de qualidade. Juntos, estamos promovendo uma indústria de skincare mais consciente e alinhada com os valores de proteção dos animais.
      </div>)
    }
    else if(mensagem === 4){
      setMsg(<div className='mensagem'>Aceitamos devoluções dentro de um período de 7 dias após a compra, desde que o produto não tenha sido aberto ou utilizado. A devolução é valida apenas quando a embalagem está amassada, rasgada, há vazamentos do produto, erros de fabrica como embalagem vazia ou sujeira.
        </div>)
    }
    else if(mensagem === 5){
      setMsg(<div className='mensagem'>
        A combinação de produtos de skincare de diferentes marcas pode ser eficaz para atender às necessidades individuais da pele. No entanto, é essencial estar atento à compatibilidade química dos produtos para evitar possíveis irritações ou reações adversas. Certifique-se de selecionar produtos adequados ao seu tipo de pele e preocupações específicas, mantendo uma rotina consistente para obter os melhores resultados.
      </div>)
    }
    else if(mensagem === 6){
      setMsg(<div className='mensagem'>
        Em nosso catálogo, disponibilizamos uma ampla gama de produtos direcionados a diferentes tipos de pele. Utilize nossas ferramentas de filtragem para encontrar produtos especialmente formulados para atender às necessidades de peles secas, oleosas, sensíveis, mistas e muito mais. Isso facilitará sua busca por cuidados com a pele adaptados às características únicas da sua pele.
        </div>)
    }
    else if(mensagem === 7){
      setMsg(<div className='mensagem'>
    Caso não tenha uma conta, no canto superior direito do nosso site, há um pequeno ícone de úsuario, clique nele que vc será automaticamente direcionado para a tela de cadastro.
        </div>)
    }
    else if(mensagem === 8){
      setMsg(<div className='mensagem'>
    Caso já esteja logado, saia da sua conta e na página de login, clique em "Esqueci minha senha".
        </div>)
    }

    else{
      setMsg(<p className='erro'>por favor, digite um número válido</p>)
    }
  }


  function M() {
    setMostrar(!mostrar)
    setChat(false)
  }

  function MChat(){
    setMostrar(false)
    setChat(!chat)
  }



  return (
    <div className="pag-inicial">
      <Cabecalho />
      <div className="s1">

        
          <div className='s1-1'>

            

            <video className='video-mh' autoPlay loop muted >

              <source src="/assets/videos/modelomh.mp4" type="video/mp4" />

            </video>


          </div>
          <div className='s1-2'>
            <p>A importância do <b>SkinCare</b> reside no fato de que nossa pele merece <b>cuidados especiais.</b>
              É o maior órgão do nosso corpo e enfrenta diariamente agressões ambientais. Ao adotar uma rotina de cuidado da pele, você <b>fortalece sua barreira natural, previne danos e obtém uma pele mais saudável e radiante.</b>
            </p>
          </div>



      </div>


      <div className='s2'>
        <div className='s2-1' onClick={M}>
          <img src='/assets/images/usuario/inicial/s2-1.png' alt='' /> <p>sobre nós</p>
        </div>
        <div className='s2-2'>
          <a href='/produtos'> <img src='/assets/images/usuario/inicial/s2-2.png' alt='' /> <p> nossos produtos </p>  </a>
        </div>
        <div className='s2-3' onClick={MChat}>
          <img src='/assets/images/usuario/inicial/s2-3.png' alt='' /> <p> ajuda </p>
        </div>
      </div>
      <div className='s3'>
        {mostrar === true &&
          <>
            <div className='mostrar'>
              <img src='/assets/images/usuario/inicial/s2-1.png' alt='' className='mostrar-img' />
              <div className='m-1'>
                <h3>Bem-vindo a Solleil!</h3>
                <p>Na nossa empresa, estamos comprometidos em trazer a você os melhores produtos de skincare, para que você possa cuidar da sua pele de maneira eficaz e transformar sua rotina de cuidados em um verdadeiro ritual de bem-estar. <br></br>Nossa missão é oferecer os melhores produtos para todos os tipos de pele, atendendo às necessidades individuais de cada pessoa. Com uma ampla variedade de produtos, desde limpadores faciais suaves até máscaras revitalizantes, estamos aqui para te ajudar a alcançar uma pele saudável, brilhante e radiante.<br></br>Acreditamos que a beleza vai além de uma aparência superficial. Ela está intrinsecamente ligada à saúde e ao bem-estar. Por isso, nossos produtos são cuidadosamente formulados para nutrir e proteger sua pele, promovendo uma sensação de equilíbrio e vitalidade.<br></br>Então, junte-se a Solleil e descubra a beleza que existe em você. Navegue em nossa loja virtual, explore nossa linha de produtos e comece sua jornada para uma pele radiante e saudável. Estamos aqui para ajudar você a alcançar a melhor versão de si mesmo!</p>
              </div>
            </div>
          </>}


          {chat === true  &&
          <>
          <div className='s1-chat'>
            <div className='chat-img'><img src='/assets/images/usuario/inicial/nuvemsol.png' alt=''/></div>
            

              <div className='chat'>
                <div className='fixed'>
                <p>Bem vindo a ajuda, digite um número de 1 a 7 para obter informações:<br/>
                  1- Rotina de Cuidados com a Pele:<br/>
                  2- Dicas de Proteção Solar:<br/> 
                  3- Teste em animais:<br/>
                  4- Política de devolução e/ou reembolso: <br/>
                  5- Combinação e uso de diferentes marcas de skincare:<br/> 
                  6- Como escolher um produto adequado:<br/> 
                  7- Criação de conta:<br/>
                  8- Como recuperar a Senha:<br/>

                 </p>
              {msg}
                </div>
                


              <div className='input'>
              <input type='number' value={mensagem} onChange={e => Number(setMensagem(e.target.value))} placeholder='digite um número'  />
              <button onClick={mensagemClick}> <img alt='' src='/assets/images/usuario/inicial/msg.png'/></button>
              </div>
            
                
              
              </div>

              
                
                
              

            
          </div>
          </>
          }

          
      </div>
      <div className='s4'>
       <Carrossel/>
        
     
      </div>
      <div className='s5'>
        <p>Parcerias</p>
        <div className='s5-1'>
            <a href='c'> <img src='/assets/images/usuario/inicial/sallve.png' alt='' /> </a>
          <img src='/assets/images/usuario/inicial/biossance.png' alt='' />
          <img src='/assets/images/usuario/inicial/creamy.png' alt='' />
          <img src='/assets/images/usuario/inicial/simple.png' alt='' />
          <img src='/assets/images/usuario/inicial/cerave.png' alt='' />
          <img src='/assets/images/usuario/inicial/laroche.png' alt='' />
        </div>
      </div>

      <div className='s5-linha'></div>

      <div className='s6'>
        <div className='pisca'>
          <h1>
          <span className='pisca-s6'><p>CONHEÇA NOSSOS PRODUTOS</p></span>
          </h1>
        </div>

        <div className='s6-1'>
            <div className='s6-img'>
          <Link to="/produtos">  <img className='s6-p1' src='/assets/images/usuario/inicial/pdts6.png' alt='' /></Link>
          <p className='s6-p'>SÉRUM</p>
        </div>

        <div className='s6-img'>
          <Link to="/produtos"> <img className='s6-p1' src='/assets/images/usuario/inicial/pdtts6.png' alt='' /></Link>
          <p className='s6-p'>GEL DE LIMPEZA</p>
        </div>


        <div className='s6-img'> 
          <Link to="/produtos"> <img className='s6-p1' src='/assets/images/usuario/inicial/pdttts6.png' alt='' /></Link>
          <p className='s6-p'>ÁGUA MICELAR</p>
        </div>

        <div className='s6-img'>
         <Link to="/produtos"> <img className='s6-p1' src='/assets/images/usuario/inicial/pdtttts6.png' alt='' /> </Link>
          <p className='s6-p'> HIDRATANTE FACIL</p>
        </div>

       
        </div>
        <div className='s7'  >
        <Link to="/produtos"> <button className='s7-ver'>VER MAIS</button> </Link>
        </div>

      </div>

     
      <Rodape />
    </div>
  );
}

