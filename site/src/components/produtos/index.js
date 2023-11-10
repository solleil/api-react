import { listarProdutos } from '../../api/getAPI';
import './index.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function MolduraProdutos(){
    const [produtoS, setProdutoS] = useState([]);

    const navigate = useNavigate();

    async function carregarProdutos() {
        const respo = await listarProdutos();
        setProdutoS(respo)
    };

    useEffect(() => {
        carregarProdutos();
    }, [])
    
    return(
        <div className="produto">
            {produtoS.map((item) => 
                <div className='prod-desc'>
                    <img className="img-prod" src='/assets/images/usuario/inicial/produto.png' alt=''/> 
                    <div className='s1-start'>
                        <b>{item.nome}</b>
                        <p>{item.descricao}</p>
                        <b>{item.preco}</b>
                    </div>
                </div>
            )}
        </div> 
    )
}