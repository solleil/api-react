import Cabecalho from '../../../components/cabecalho';
import './index.scss';
import { useState } from 'react';

export default function FiltrarPedido(){
        

return(
    <div className='filtr-pedido'>
        <div className='cabe'>
        <Cabecalho></Cabecalho>
        </div>

        <div className='ka'>

            <div className='cla'>
            <div className='clara'>
                <input type='text'></input>

            <div className='clan'>
                <button type="button"> 
                    <img src='/assets/images/geral/pesquisa.png' alt=''/>
                    Pesquisar
                </button>
            </div>
            </div>
            </div>




        <div className='filtra'>
            <div className='table'>

            <div className='fi-1'>

            <label>Status do pedido</label>
            <select className='pedid' >
            <option>Todos exceto arqu.</option>
            </select>

            </div>


            <div className='fi-1'>

            <label>Intervalo de data</label>
            <select className='pedid' >
            <option>Todas as datas</option>
            </select>

            </div>


            <div className='fi-1'>

            <label>Meio de envio</label>
            <select className='pedid' >
            <option>Todos</option>
            </select>

            </div>


            <div className='fi-1'>


            <label>Canal de venda</label>
            <select className='pedid' >
            <option>Todos </option>
            </select>


            </div>
            <div className='fi-2'>
                <button>Filtrar</button>
            </div>
            </div>
        </div>





        <div className='fil-pedid'>

            <div className='fil-1'>

                <p>4 pedidos encontrados filtrando por:</p>
                <div className='filsa'>
                    <img src='/assets/images/geral/certo.svg' alt=''/>
                </div>

            </div>

            <div className='fil-2'>
                <div className='filso'>
                <img src='/assets/images/geral/certo.svg' alt=''/>
                    Todos (exceto Arquivados e Cancelados)</div>
            </div>
        </div>




        <div className='filtro-tot'>

        <div className='fil-total'>

            <div className='to-1'>
                <div className='bola'></div>
                <div>Pedido</div>
                <div>Data</div>
                <div>Produtos Total</div>
                <div>Comprador</div>
                <div>Status do pedido</div>
                <div>Ação recomendada</div>

            </div>
            <div className='to-2'></div>
            <div className='to-3'></div>
            <div className='to-4'></div>

        </div>
        </div>

        </div>
    </div>
)
}