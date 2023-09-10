

import './index.scss';
import Cabecalho from '../../../../components/cabecalho'
import Rodape from '../../../../components/rodape';

export default function Inicial() {
  return (
    <div className="pag-inicial">

        <Cabecalho/>


        <div className="s1">

          <div className='s1-1'>           <img  src='/assets/images/usuario/inicial/s1.png' alt='' />
          <div className='linha'>.</div></div>


          <div className='s1-2'><p>A importância do <b>SkinCare</b> reside no fato de que nossa pele merece <b>cuidados especiais.</b><br></br>
          É o maior órgão do nosso corpo e enfrenta diariamente agressões ambientais. Ao adotar uma rotina de cuidado da pele, você <b> fortalece sua barreira natural, previne danos e obtém uma pele mais saudável e radiante.</b>
            </p></div>
          


        </div>



        <div className='s2'>

              <div className='s2-1'> 
                 <img src='/assets/images/usuario/inicial/s2-1.png'/> <p>sobre nós</p> 
              </div>
              <div className='s2-2'> <a> <img src='/assets/images/usuario/inicial/s2-2.png' /> <p> nossos produtos </p>  </a> </div>
              <div className='s2-3'> </div>

        </div>

        
      <Rodape/>



    </div>
  );
}

