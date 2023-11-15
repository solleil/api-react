import { listarProdutos, buscarImgProduto } from '../../api/getAPI';
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


    async function carregarImagem(imagem) {
        
    }

    useEffect(() => {
        carregarProdutos();
    }, [])
    
    return(
        <div className="produto">
            {produtoS.map((item) => 
                <div className='prod-desc'>
                    <img className="img-prod" src={() => carregarImagem(item.img)} alt=''/> 
                    <div className='s1-start'>
                        <b>{item.nome}</b>
                        <p>{item.descricao}</p>
                        <b>R${item.preco}</b>
                    </div>
                </div>
            )}
        </div> 
    )
}