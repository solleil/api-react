import './index.scss';
import CabecalhoAdm from '../../../components/cabecalhoAdm/index.js'


export default function EditarManualpag() {


    return (
        <div className='tela'>
            <CabecalhoAdm/>

            <div className='cim-1'>
                <h4><b>Editor Manual</b></h4>
                <div className='linha'></div>
            </div>

            <div className='dp-1'>
                <label>IP do pedido:</label>
                <input></input>

                <div className='sep-0'>
                <button className='bot-0'>Pesquisar</button>
                </div>
            </div>


            <div className='linha'></div>

            <p><b>Dados da pesquisa:</b></p>

            <div className='dp-2'>

                <div className='in-1'>
                    <label>IP do pedido:</label>
                    <div className='input'></div>
                </div>
                <div className='in-1'>
                    <label>Nome do cliente:</label>
                    <div className='input'></div>
                </div>
                <div className='in-2'>
                    <label>status do pagamento</label>
                    <select>
                        <option></option>
                        <option>Pagamento Aprovado</option>
                        <option>Pagamento Recusado</option>
                    </select>
                </div>
                <div className='in-2'>
                    <label>Entrega:</label>
                    <select>
                        <option></option>
                        <option>Aguardando...</option>
                        <option>Aprovado</option>
                        <option>Preparando</option>
                        <option>A caminho...</option>
                        <option>Entregue</option>
                    </select>
                </div>
                <div className='bot-1'>
                <button className='bot'>Alterar</button>
                </div>
            </div>


        </div>
    );
}