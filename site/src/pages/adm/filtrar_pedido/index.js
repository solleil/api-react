import { toast } from 'react-toastify';
import { listarPedidopPorID, listarProdutos } from '../../../api/getAPI.js';
import CabecalhoAdm from '../../../components/cabecalhoAdm';
import './index.scss';
import { useEffect, useState } from 'react';


export default function FiltrarPedido() {
    const [stts, setStts] = useState('');
    const [intervadata, setIntervdata] = useState('');
    const [entrega, setEntrega] = useState('');

    const [pedidos, setPedidos] = useState([])
    
 
    

    async function filtrar() {
        const respo = await listarPedidopPorID();
        setPedidos(respo);
      }

    useEffect(() => {
        listarProdutos()
      }, []);
    
    return (
        <div className='filtr-pedido'>
            <div className='cabe'>
                <CabecalhoAdm />
            </div>

            <div className='ka'>

                <div className='cla'>
                    Filtrar Pedidos
                </div>




                <div className='filtra'>
                    <div className='table'>

                        <div className='fi-1'>

                            <label>Status do pedido</label>
                            <select className='pedid' value={stts} onChange={e => setStts(e.target.value)} >
                                <option></option>
                                <option>Processando</option>
                                <option>Enviado</option>
                                <option>A caminho</option>
                                <option>Preparando</option>
                                <option>Não pagos</option>
                            </select>

                        </div>


                        <div className='fi-1'>

                            <label>Intervalo de data</label>
                            <input type='date' className='pedid' value={intervadata} onChange={e => setIntervdata(e.target.value)}></input>

                        </div>


                        


                        <div className='fi-1'>


                            <label>Por ID</label>
                            <input type='text' className='pedid'></input>


                        </div>
                        <div className='fi-2'>
                            <button onClick={filtrar}>Filtrar</button>
                        </div>
                    </div>
                </div>





                <div className='fil-pedid'>

                    <div className='fil-1'>

                        <p>pedidos encontrados filtrando por:</p>
                        <div className='filsa'>
                            <img src='/assets/images/geral/certo.svg' alt='' />
                        </div>

                    </div>

                    <div className='fil-2'>
                        <div className='filso'>
                            <img src='/assets/images/geral/certo.svg' alt='' />
                            Todos (exceto Arquivados e Cancelados)</div>
                    </div>
                </div>




                <div className='filtro-tot'>

                    <div className='fil-total'>

                        <div className='to-1'>
                            <div className='bola'></div>
                            <div>Pedido</div>
                            <div>Data</div>
                            <div>Qntd Total</div>
                            <div>Cliente</div>
                            <div>Status do pedido</div>
                            <div>
                            {   pedidos.map((item) =>
                                   <div className='to-1'>
                                    <p>{item.id}</p>
                                    <p>{item.data}</p>
                                    <p>{item.total}</p>
                                    <p>{item.cliente}</p>
                                    <p>{item.stts}</p>
                                   </div>
                                   
                                )

                                }
                                

                            </div>

                        </div>



                    </div>
                </div>

            </div>
        </div>
    )
}