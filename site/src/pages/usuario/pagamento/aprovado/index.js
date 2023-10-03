import Cabecalho from '../../../../components/cabecalho'
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





        </div>
    )
    

}