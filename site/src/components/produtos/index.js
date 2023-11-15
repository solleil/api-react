import { listarProdutos } from '../../api/getAPI';
import { api_url } from '../../constats';
import './index.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MolduraProdutos(){
    const [produtoS, setProdutoS] = useState([]);
    const navigate = useNavigate();

    async function carregarProdutos() {
        const respo = await listarProdutos();
        setProdutoS(respo)
    };

    function passarPagInfo(id) {
        navigate(`/info/${id}`)
    }


    function carregarImagem(imagem) {
        return `${api_url}/${imagem}`
    }

    useEffect(() => {
        carregarProdutos();
    }, [])
    
    return(
        <div className="produto">
            {produtoS.map((item) => 
                <div className='prod-desc' key={item.id} onClick={() => passarPagInfo(item.id)}>
                    <img className="img-prod" src={carregarImagem(item.imagem)} alt=''/> 
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