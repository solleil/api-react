import './index.scss'
import Cabecalho from '../../../components/cabecalho'

export default function Escolherpagamento(){


    return(
        <div classname="s-1">
            <Cabecalho/>
            
            <div className='s-2'>
                <div id='c'></div>
                <div id='l'></div>
                <div id='c'></div>
                <div id='l'></div>
                <div id='c'></div>
            </div>
            
            
            <div className='s-3'>
                <div className='s-1-3'>
                    <p>Entrega</p>
                    <img src='/assets/images/pagamento/verificar.png' alt=''/>
                    <div className='s-2-3'> <p>Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo - SP, CEP: 04773-000</p></div>
                </div>
                
            </div>
            
            
            <div className="met-pag">

            </div>
        </div>
    )
}