import { useState } from 'react';
import './index.scss';
import Cabecalho from '../../../../components/cabecalho'
import Rodape from '../../../../components/rodape';

export default function Inicial() {
  const [mostrar, setMostrar] = useState(false)

  function M() {
    setMostrar(!mostrar)
  }

  return (
    <div className="pag-inicial">
      <Cabecalho />
      <div className="s1">

        <div className='s1-1-teste'>
          <div className='s1-1'>
           
            <video className='video-mh' controls loop >
              
              <source src="/assets/videos/modelomh.mp4" type="video/mp4" />

            </video>


          </div>
          <div className='s1-2'><p>A importância do <b>SkinCare</b> reside no fato de que nossa pele merece cuidados especiais.<br/> Afinal, ela é o maior órgão do nosso corpo, desempenhando um papel vital não apenas em nossa <b>saúde física</b>, mas também na nossa autoestima e bem-estar emocional.<br/> Nossa pele atua como uma barreira protetora contra as agressões do ambiente, como <b>poluição, radiação UV, bactérias</b> e outros elementos prejudiciais.

Diariamente, nossa pele enfrenta desafios, e essas agressões ambientais podem ter um impacto significativo em sua,
saúde e aparência.<br/> É por isso que adotar uma rotina de cuidado da pele se torna fundamental. Essa prática não é apenas uma questão de estética, mas também um ato de <b>amor próprio</b> e <b>autocuidado.</b>

<br/>Ao seguir uma rotina de SkinCare, você fortalece a barreira natural da sua pele, que é composta por água, lipídios e proteínas, ajudando-a a manter a hidratação e resistir aos danos. Além disso, os cuidados com a pele não se limitam a um rosto radiante, mas também abrangem a prevenção de problemas de pele, como <b> acne, rugas, manchas e muito mais.</b></p></div>

        </div>

      </div>


      <div className='s2'>
        <div className='s2-1' onClick={M}>
          <img src='/assets/images/usuario/inicial/s2-1.png' alt='' /> <p>sobre nós</p>
        </div>
        <div className='s2-2'> <a href='/iniproduto'> <img src='/assets/images/usuario/inicial/s2-2.png' alt='' /> <p> nossos produtos </p>  </a> </div>
        <div className='s2-3'> <img src='/assets/images/usuario/inicial/s2-3.png' alt='' /> <p> ajuda </p>  </div>
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
        <img src='/assets/images/usuario/inicial/s4.png' alt='' />
        <p>
          Investir em Skin Care é investir em si mesmo.<br />
          Com o passar do tempo, a <b> pele envelhece</b> e surgem sinais visíveis.<br />
          O Skin Care ajuda a <b>retardar esse processo</b>, reduzindo rugas, linhas finas e manchas. Com uma rotina consistente, você pode ter uma <b>aparência mais jovem</b>  e radiante.
        </p>
      </div>
      <div className='s5'>
        <p>Parcerias</p>
        <div className='s5-1'>
          <img src='/assets/images/usuario/inicial/sallve.png' alt='' />
          <img src='/assets/images/usuario/inicial/biossance.png' alt='' />
          <img src='/assets/images/usuario/inicial/creamy.png' alt='' />
          <img src='/assets/images/usuario/inicial/simple.png' alt='' />
          <img src='/assets/images/usuario/inicial/cerave.png' alt='' />
          <img src='/assets/images/usuario/inicial/laroche.png' alt='' />
        </div>
      </div>
    
      <Rodape />
    </div>
  );
}

