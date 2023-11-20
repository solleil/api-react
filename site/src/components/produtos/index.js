import { listarProdutos, listarProdutosFiltro } from '../../api/getAPI';
import { api_url } from '../../constats';
import './index.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MolduraProdutos(props){
    const [produtoS, setProdutoS] = useState([]);
    const navigate = useNavigate();

    async function carregarProdutos() {
        const respo = await listarProdutos();
        setProdutoS(respo)
    };

    async function recarregarProduto() {
        if (props.idt.charAt(1) === 'c') {
            const query = `categoria=${props.idt.charAt(0)}`;
            const respo = await listarProdutosFiltro(query);
            setProdutoS(respo);
        }
        else if (props.idt.charAt(1) === 't') {
            const query = `tipopele=${props.idt.charAt(0)}`;
            const respo = await listarProdutosFiltro(query);
            setProdutoS(respo);
        }
        else if (props.idt.charAt(1) === 'n') {
            const query = `necess=${props.idt.charAt(0)}`;
            const respo = await listarProdutosFiltro(query)
            setProdutoS(respo);
        }
        else if (props.idt.charAt(1) === 'm') {
            const query = `marca=${props.idt.charAt(0)}`;
            const respo = await listarProdutosFiltro(query)
            setProdutoS(respo);

        } else {
            carregarProdutos();
        }
    }

    function passarPagInfo(id) {
        navigate(`/info/${id}`)
    }


    function carregarImagem(imagem) {
        return `${api_url}/${imagem}`
    }

    useEffect(() => {
        if (!props.idt) {
            carregarProdutos();
        } else {
            recarregarProduto();
        }
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