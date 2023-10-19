import './index.scss';


export default function Status() {


    return (
        <section className='index_Status'>
            <header className='cabecalho'>
                <div className="cbc_info-1">
                    <h2>Id do Produto: </h2>
                </div>
                <div className="cbc_info-2">
                    <div className="cbcinfo2-img">
                        <img alt='' src='assets/images/geral/limpador.png' />
                    </div>
                    <div className='cbcinfo2-cx1'>
                        <h3>Nome Produto</h3>
                        <div>
                            <h5>Descrição:</h5>
                            <p>Descrição Produto</p>
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
            <hr/>
            <section className='sec_1'>
                <div className='sec1-cx1'>
                    <h3>Status da Entrega</h3>
                    <p>Após a aprovação de seu pagamento, poderá acompanhar por aqui o status de seu pedido.</p>
                </div>
                <div className='sec1-cx2'>
                    
                </div>
            </section>
        </section>
    );
}