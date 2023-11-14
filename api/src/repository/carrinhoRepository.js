import { connection } from './connection.js';


export async function listarCarrinho(){
    const comando= `
    select *
    from tb_carrinho
    inner join tb_cliente on tb_carrinho.id_cliente = tb_cliente.id_cliente
    inner join tb_produto on tb_carrinho.id_produto = tb_produto.id_produto
    order by id_carrinho
    
    `;

    const [resp] = await connection.query(comando)
    return resp;

}

export async function inserirCarrinho(carrinho){
    const comando = `
    insert into tb_carrinho (id_cliente, id_produto)
    values ( ?, ? )
    `

    const [ resp ] = await connection.query(comando, [carrinho.cliente, carrinho.produto] )
    return resp.affectedRows;
}