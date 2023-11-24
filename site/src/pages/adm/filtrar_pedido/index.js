import { listarPedido, listarPedidopPorID } from '../../../api/getAPI.js';
import CabecalhoAdm from '../../../components/cabecalhoAdm';
import './index.scss';
import { useEffect, useState } from 'react';


export default function FiltrarPedido() {
    const [stts, setStts] = useState('');
    const [intervadata, setIntervdata] = useState('');

    const [id, setId] = useState('');
    const [pedidoS, setPedidoS] = useState([]);
    

    async function filtro(){
        const resp = await listarPedidopPorID(id);
        setPedidoS(resp);
    }
    
    async function carregarpedidos(){
        const resp = await listarPedido();
        console.log(resp);
        setPedidoS(resp);
    };

    useEffect(() => {
        carregarpedidos()
    },[])
    
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


                            <label>Por ID</label>
                            <input type='search' className='pedid' value={id} onChange={e => setId(e.target.value)}></input>


                        </div>
                        <div className='fi-2'>
                            <button onClick={filtro}>Filtrar</button>
                        </div>
                    </div>
                </div>
                <div className='fil-pedid'>

                    <div className='fil-1'>

                        <p>Pedidos encontrados filtrando por:</p>
                        <div className='filsa'>
                             Tabela
                        </div>

                    </div>

                    
                </div>
                <div className='filtro-tot'>

                    <div className='fil-total'>

                        <div className='to-1'>    
                            <div className='id'>ID</div>
                            <div className='data'>Data</div>
                            <div className='idnome'>Pedido</div>
                            <div className='nome'>Clientes</div>
                            <div className='envio'>Enviado</div>
                            <div></div>
                            </div>
                            <div className='linh'></div>

                            {pedidoS.map((item) =>
                               
                                <div className='to-1' key={item.id}>    
                                    <div className='id'>{item.id}</div>
                                    <div className='data'>{item.data.substr(0, 10)}</div>
                                    <div className='idnome'>{item.idnome}</div>
                                    <div className='nome'>{item.nome}</div>
                                    <div className='envio'>{item.envio ? 'Sim' : 'Não'}</div>
                                    <div></div>
                                    
                                </div>
                            
                            )
                            }
                        
                        



                    </div>
                </div>

            </div>
        </div>
    )
}