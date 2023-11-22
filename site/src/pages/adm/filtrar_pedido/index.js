
import CabecalhoAdm from '../../../components/cabecalhoAdm';
import './index.scss';
import { useState } from 'react';


export default function FiltrarPedido() {
    const [stts, setStts] = useState('');
    const [intervadata, setIntervdata] = useState('');
    const [meiodeenvio, setMeiodeenvio] = useState('');
    const [canaldevenda, setCanalvenda] = useState('');





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
                            <select className='pedid' value={stts} onChange={(e) => setStts(e.target.value)} >
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
                            <select className='pedid' value={intervadata} onChange={(e) => setIntervdata(e.target.value)} >
                                <option>Todas as Datas</option>
                                <option>Janeiro a Fevereiro</option>
                                <option>Fevereiro a Março</option>
                                <option>Março a Abril</option>
                                <option>Abril a Maio</option>
                                <option>Maio a Junho</option>
                                <option>Junho a Julho</option>
                                <option>Julho a Agosto</option>
                                <option>Agosto a Setembro</option>
                                <option>Setembro a Outubro</option>
                                <option>Outubro a Novembro</option>
                                <option>Novembro a Dezembro</option>
                                <option>Desembro a Janeiro</option>
                            </select>

                        </div>


                        <div className='fi-1'>

                            <label>Meio de envio</label>
                            <select className='pedid' value={meiodeenvio} onChange={(e) => setMeiodeenvio(e.target.value)}>
                                <option>Correios</option>
                                <option>Lalamove</option>
                                <option>Troque Rápido</option>
                            </select>

                        </div>


                        <div className='fi-1'>


                            <label>Entrega</label>
                            <select className='pedid' value={canaldevenda} onChange={(e) => setCanalvenda(e.target.value)}>
                                <option></option>
                                <option>Aguardando...</option>
                                <option>Aprovado</option>
                                <option>Preparando</option>
                                <option>A caminho...</option>
                                <option>Entregue</option>
                            </select>


                        </div>
                        <div className='fi-2'>
                            <button >Filtrar</button>
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
                            

                        </div>



                    </div>
                </div>

            </div>
        </div>
    )
}