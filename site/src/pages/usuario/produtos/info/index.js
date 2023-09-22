import Cabecalho from '../../../../components/cabecalho';
import './index.scss';

export default function Info() {



  return (
    <div className="pag-info">
      <Cabecalho/>
     <div className='td-info'>
        <img className='exemplo' src='/assets/images/usuario/info/exemplo.png' alt='' />
      
        <div className='info'>
          <div className='limpador'><h2>limpador facial sallve</h2></div>
          <div className='pl-limpa'><h3>para uma pele limpa e hidratada.</h3></div>
          <div className='vl-desconto'>
          <div ><h3>R$ 79,90</h3></div>
          <div ><h4>ou 3x de R$26,63</h4></div>
          </div>
          <div className='estrelas'> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' /> <img className='estrela' src='/assets/images/usuario/info/estrela 1.png' alt='' />  </div>
          <div><h5>disponivel no estoque</h5></div>
          <div>
            <div className='tamanhos-info'> <img className='disponivel' src='/assets/images/usuario/info/direito 1.png' alt='' /> <h4>outros tamanhos disponíveis:</h4></div> 
            <div className='ml-1' > 
            <button className='ml'> 300ml  </button> 
            <button className='ml' > 160ml </button> 
            <button className='ml' > 60ml </button>
            </div>
           
          </div>
          <div className='qtd-info'>
          

          </div>

          <div className='compre-info'>
            <button>compre agora</button>
          </div>

          <div className='add-info'>
            <button> adicionar a sacola</button>
            <div>
          <img  className='coracao-info' src='/assets/images/usuario/info/image 22.png' alt='' />
          </div>
          </div>
          
          </div> 
        </div>
      

      


    </div>
  );
}