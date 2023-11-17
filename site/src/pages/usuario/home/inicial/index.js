import { useState } from 'react';
import './index.scss';
import Cabecalho from '../../../../components/cabecalho'
import Rodape from '../../../../components/rodape';
import Carrossel from '../../../../components/carrossel'
import { Link } from 'react-router-dom';


export default function Inicial() {
  const [mostrar, setMostrar] = useState(false)
  

  function M() {
    setMostrar(!mostrar)
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
        <div className='s2-3'>
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

      <div className='s6'>
        <div className='pisca'>
          <h1>
          <span className='pisca-s6'><p>CONHEÇA NOSSOS PRODUTOS</p></span>
          </h1>
        </div>

        <div className='s6-1'>
            <div className='s6-img'>
          <img className='s6-p1' src='/assets/images/usuario/inicial/pdts6.png' alt='' />
          <p className='s6-p'>SÉRUM</p>
        </div>

        <div className='s6-img'>
          <img className='s6-p1' src='/assets/images/usuario/inicial/pdtts6.png' alt='' />
          <p className='s6-p'>GEL DE LIMPEZA</p>
        </div>


        <div className='s6-img'>
          <img className='s6-p1' src='/assets/images/usuario/inicial/pdttts6.png' alt='' />
          <p className='s6-p'>ÁGUA MICELAR</p>
        </div>

        <div className='s6-img'>
          <img className='s6-p1' src='/assets/images/usuario/inicial/pdtttts6.png' alt='' />
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

