import './index.scss';
import Cabecalho from '../../../../components/cabecalho/index.js';

export default function Status() {


    return (
        <section className='index_Status'>
            <Cabecalho />
            <section className='fundo'>
                <header className='cabecalho'>
                    <div className="cbc_info-1">
                        <h2>Id do Produto: <span>xxxxxx</span> </h2>
                    </div>
                    <div className="cbc_info-2">
                        <div className="cbcinfo2-img">
                            <img alt='' src='assets/images/geral/limpador.png' />
                        </div>
                        <div className='cbcinfo2-cx1'>
                            <h3>Nome Produto</h3>
                            <div>
                                <h5>Descrição:</h5>
                                <p>*Descrição Produto*</p>
                            </div>
                        </div>
                        <div className='cbcinfo2-cx2'>
                            <h3>Status do Pagamento</h3>
                            <div>
                                <h4>Pagamento <span>Aprovado</span></h4>
                            </div>
                        </div>
                    </div>
                </header>
                <hr />
                <section className='sec_1'>
                    <div className='sec1-cx1'>
                        <h3>Status da Entrega</h3>
                        <p>Após a aprovação de seu pagamento, poderá acompanhar por aqui o status de seu pedido.</p>
                    </div>
                    <div className='sec1-cx2'>
                        <button>Cancelar</button>
                        <h3>Pedido Enviado!</h3>
                    </div>
                </section>
                <hr />
                <section className='sec_2'>
                    <div className='sec2_c1'>
                        <div className='sec2c1-cx1'>
                            <div>
                                <h4>Aguardando a aprovação do Pagamento</h4>
                            </div>
                        </div>
                        <div className='sec2c1-cx2'>
                            <h4>A caminho do endereço:</h4>
                        </div>
                    </div>
                    <div className='sec2_c2'>
                        <div className='sec2c2-cx1'>
                            <div>
                                <h4>Preparando o pedido para o envio</h4>
                            </div>
                        </div>
                        <div className='sec2c2-cx2'>
                            <h4>Pedido Entregue</h4>
                        </div>
                    </div>
                    <div className='sec2_c3'>
                        <div className='sec2c3-cx1'>
                            <div>
                                <h4>Pedido Confirmado</h4>
                            </div>
                        </div>
                        <div className='sec2c3-cx2'>
                            <div>
                                <h4>Aguardando a Confirmção do Cliente</h4>
                            </div>
                        </div>
                    </div>
                    <div className='sec2_c4'>
                        <div className='sec2c4-cx1'>
                            <div>
                                <h4>Pedido Enviado</h4>
                            </div>
                        </div>
                        <div className='sec2c4-cx2'>
                            <div>
                                <h4>Aguardando Avaliação</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}