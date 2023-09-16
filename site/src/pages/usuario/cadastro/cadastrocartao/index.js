import './index.scss'

export default function Cadastrocartao(){
    
    
    
    return(
        
        <div className='p-1'>
            
            <div className='s-1'>
                <p>cadastre seu cartão</p> 
                <div id='l-1'></div>   
            </div>


            <div className='s-2'>
                <input type='text' placeholder='número do cartão'></input>
                <input type='text' placeholder='nome no cartão'></input>
            </div>


            <div className='s-3'>
                <p>validade:</p>    
                <p id='c-1'>código de segurança:</p>
            </div>



            <div className='s-4'>
                <select className='e-1'>
                    <option>mês</option>
                </select>
                <select className='e-1'>
                    <option>ano</option>
                </select>
                <input type='text'></input>
                <input type='number' placeholder='CPF do titular'></input>

            </div>



        </div>
        
    )
}