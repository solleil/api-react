
import './index.scss'

export default function Pagaprovado(){
    
    return(
        <div className='pg-aprovado'>
           <div className='cabecalho'>
            <img className='sol-apv' src='/assets/images/geral/sol.png' alt='' />
            <h1>SOLLEIL</h1>

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
                       <div className='b'>   <b> Qtde     1</b>  </div>
                    
                     <button><h3>Acompanhar meu pedido</h3></button>
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

                 <div className='acp-2'>
                 <p>Subtotal:</p>
                 <p id='negri'>R$0,00</p>
                 </div>

                 <div className='acp-2'>
                    <p>Taxa de envio:</p>
                    <p id='negri'>R$3,00</p>
                 </div>

                 <div className='acp-2'>
                    <p>Entrega garantida:</p>
                    <p id='negri'>R$0,00</p>
                 </div>

                 <button><h3>Voltar para Página inicial</h3></button>

                 </div>

                </div>


            </div>




</div>
    )
    

}