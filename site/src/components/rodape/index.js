import './index.scss'

export default function Rodape() {

    return (
        <div className="rodape">

            <div className="info-R">

                <div className="r1">
                    <p className="h6">Ajuda & Suporte</p>
                    <a href='/'>Central de ajuda</a>
                    <a href='/'>Politica de entrega</a>
                    <a href='/'>Dúvidas frequentes</a>
                    <a href='/'>Termos de uso</a>
                    <a href='/'>Trocas e devoluções</a>
                </div>
                <div className="r1">
                    <p className="h6">Minha Conta</p>
                    <a href='/conta'>Dados pessoais</a>
                    <a href='/conta'>Meus endereços</a>
                    <a href='/conta'>Alterar senha</a>
                    <a href='/conta'>Meus pedidos</a>
                    <a href='/conta'>Meus favoritos</a>
                </div>
                <div className="r1">
                    <p className="h6">Institucional</p>
                    <a href='/'>Parcerias</a>
                </div>

                <div className="r4">

                    <p className="h1"> SOLLEIL</p>
                    
                    <div className="a">
                        <a href="https://instagram.com/solleil.skincare?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr "><img alt="" src="/assets/images/geral/insta.png" /></a>
                        <a href="fadf"><img alt="" src="/assets/images/geral/twitter.png"/></a>
                     
                    
                    </div>

                </div>

            </div>
        </div>
    )
}