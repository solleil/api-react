import './index.scss'

export default function CRodape(){
    
    return(
        <div className="rodape">
            <div className="info">  
                <div className="Ajuda">
                    <h1>Ajuda & Suporte</h1>
                    <p>Central de ajuda</p>
                    <p>Politica de entrega</p>
                    <p>Dúvidas frequentes</p>
                    <p>Termos de uso</p>
                    <p>Trocas e devoluções</p>
                </div>
                <div className="Conta">
                    <h1>Minha Conta</h1>
                    <p>Dados pessoais</p>
                    <p>Meus endereços</p>
                    <p>Alterar senha</p>
                    <p>Meus pedidos</p>
                    <p>Meus favoritos</p>
                </div>
                <div className="Institucional">
                    <h1>Institucional</h1>
                    <p>Revenda</p>
                    <p>Parcerias</p>
                </div>
            </div>  
        </div> 
    )
}