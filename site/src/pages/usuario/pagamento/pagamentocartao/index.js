import './index.scss'
import Cabecalho from '../../../../components/cabecalho'

export default function Escolherpagamento(){


    return(
        <div className='s1'>
            <Cabecalho/>
            
                <div className='s-2'>

                    <div className='s2-1'>
                    <div className='c'></div>
                   
                   <div className='l'></div>

                   <div className='c'></div>

                   <div className='l'></div>

                   <div className='cv'></div>
                    </div>
                    

                    <div className='p'>
                        <p id='lo'>Login</p>
                        <p id='en'>Entrega</p>
                        <p id='pag'><strong>Pagamento</strong></p>
                    </div>
                </div>
                
                
                <div className='s-3'>
                    
                       <div className='s-1-2-3'>                        
                            <p><strong>Entrega</strong></p>
                            <img src='/assets/images/usuario/pagamento/verificar.png' alt=''/>
                        </div> 

                       <p id='texto'>Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo - SP, CEP: 04773-000</p>
                                 
                </div>
                
                
                <div className='s-4'>
                    <p id='t-2'><strong>MÉTODO DE PAGAMENTO</strong></p>
                    <div className='s-4-3'>
                        <p >Cartão de crédito</p>
                        <img src='/assets/images/usuario/pagamento/cartao-de-credito.png' alt=''/> 
                    </div>
                    <div className='s-4-3'>
                        <p >Cartão de débito</p>
                        <img src='/assets/images/usuario/pagamento/cartao-de-debito.png' alt='' /> 
                    </div>
                </div>
                
                
                <div className='k'> <div className='l-c'></div> </div>

                <div className='s-5'>
                    <div className='s-5-1'>                    
                        <p><strong>Valor total:</strong></p>
                        <p className='t-4'>R$50,00</p>
                    </div>
                    <div className='s-5-1'>                    
                        <b>Taxa de envio:</b>
                        <p className='t-4'>R$5,00</p>
                    </div>
                    <div className='s-5-1'>                    
                        <b>Subtotal:</b>
                        <p className='t-4'>R$55,00</p>
                    </div>
                </div>
                
                <div className='k'> <div className='l-c'></div> </div>

                <div className='r-1'>
                    <div className='s-5-1'>                    
                            <p><strong>Valor total:</strong></p>
                            <p className='t-4'>R$55,00</p>
                    </div>
              
                    <button><b>FINALIZAR PAGAMENTO</b></button>

                </div>


                
        </div>
    )

}    