import './index.scss';
import Cabecalho from '../../../../components/cabecalho'
import Rodape from '../../../../components/rodape'

export default function IniProdutos() {


  return (
    <div className="pag-produto">

      <Cabecalho/>

      <div className='s1'>
        <img src='/assets/images/usuario/iniprodutos/s1.png' alt=''/>
        <div className='s1-1'> 
            <p > Descubra a Elegância da Pele com Laneige!<br></br>
          Uma jornada de cuidados com a pele de excelência. A marca é conhecida por sua expertise em hidratação profunda e resultados visíveis. Agora, você pode encontrar seus produtos de alta qualidade em nosso site. Desfrute da hidratação profunda, melhora da textura da pele e um brilho natural que irá encantar a todos. Junte-se a nós nesta emocionante jornada para uma pele radiante e saudável com Laneige. </p>
          <button> Conheça os produtos! </button>

         </div>
      </div>


      <div className='s2'>
          <p>Produtos mais vendidos</p>
          <div className='linha'>.</div>



        <div className='s2-1'>


            <div className='s6-1-p'>
          
              <img src='/assets/images/usuario/iniprodutos/s2-2.png' alt=''/>
                <p>  WATER SLEEPING MASK </p>  <p> 
                <b> R$28,90 </b> ou 3x R$10,28 </p>
            </div>
            <div className='s6-1-p'>
          
              <img src='/assets/images/usuario/iniprodutos/s2-1.png' alt=''/>
                <p>  LIMPADOR ANTIACNE </p>  <p> 
                <b> R$54,90 </b> ou 5x R$10,28 </p>
            </div>
            <div className='s6-1-p'>
          
              <img src='/assets/images/usuario/iniprodutos/s2-2.png' alt=''/>
                <p>  WATER SLEEPING MASK </p>  <p> 
                <b> R$28,90 </b> ou 3x R$10,28 </p>
            </div>





            <div className='s6-1-p'>
          
              <img src='/assets/images/usuario/iniprodutos/s2-2.png' alt=''/>
                <p>  WATER SLEEPING MASK </p>  <p> 
                <b> R$28,90 </b> ou 3x R$10,28 </p>
            </div>
            <div className='s6-1-p'>
          
              <img src='/assets/images/usuario/iniprodutos/s2-1.png' alt=''/>
                <p>  LIMPADOR ANTIACNE </p>  <p> 
                <b> R$54,90 </b> ou 5x R$10,28 </p>
            </div>
            <div className='s6-1-p'>
          
              <img src='/assets/images/usuario/iniprodutos/s2-2.png' alt=''/>
                <p>  WATER SLEEPING MASK </p>  <p> 
                <b> R$28,90 </b> ou 3x R$10,28 </p>
            </div>




        </div>
        
      </div>



      <Rodape/>
    </div>
  );
}