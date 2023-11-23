
import './index.scss'

export default function Pagaprovado(){
    
    return(
        <div className='pg-aprovado'>
           <div className='cabecalho'>
            <div className='lg-img'>
           <img src='/assets/images/usuario/cabecalho/logo_preta.png' alt=''/>
              <p id='logo'> SOLLEIL</p>
             </div>
               <div className='linha'></div>
           </div>


           
          

           <div className='s1-apv'>
             <h1>Pagamento Aprovado</h1>
             <h5>Seu pedido está em separação e preparo para envio.</h5>

             <div className='correto'>
                <img className='verifica' src='/assets/images/geral/verifica.png' alt='' />

             </div>
           </div>

           <div className='acompanhar' >
 
                 <div className='acomps-1'>
                    <img className='produtoveri' src='/assets/images/geral/produtoveri.png' alt='' />

                       <h6>LIMPADOR FACIL</h6>
                       <div className='b'>   <b> Qtd     1</b>  </div>
                    
                     <a className='acompanhar' href='/conta'><h3>Acompanhar meu pedido</h3></a>
                </div>

                <div className='acomps-2'>
                

               <div className='todes'>
                 <h1>Informações</h1>

                 <div className='acp-1'>
                 <p>PEDIDO: </p>
                 <p id='blue'>#16718</p>
                 </div>

                 <div className='acp-2'>
                 <p>Valor Total:</p>
                 <p id='negri'>R$50,00</p>
                 </div>    

                 <a href='/'><h3>Voltar para Página inicial</h3></a>

                 </div>

                </div>


            </div>




</div>
    )
    

}