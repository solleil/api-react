import { query } from 'express';
import { connection } from './connection.js'

export async function listarPedido() {
    const comando = `
     SELECT
            pd.id_pedido       as id,
            pd.dt_pedido       as data,
            c.id_cliente       as idnome,
            c.nm_cliente       as nome,
            pd.bt_enviado      as enviado
            
            
        FROM
            tb_pedido pd
        LEFT JOIN tb_pedido pp ON pd.id_pedido = pp.id_pedido
        LEFT JOIN tb_cliente c ON pd.id_cliente = c.id_cliente
     `

    const [resp] = await connection.query(comando)
    return resp
}

export async function listarPedido2() {
    const comando = `
        select 
        id_pedido as id,
        vl_total as total
        from tb_pedido
    `;

    const [respo] = await connection.query(comando);
    return respo
}

export async function listarPedidopPorID(id) {
    const comando = `
    SELECT
    
            pd.id_pedido       as id,
            pd.dt_pedido       as data,
            c.id_cliente       as idnome,
            c.nm_cliente       as nome,
            pd.bt_enviado      as enviado
            
            
        FROM
            tb_pedido pd
        LEFT JOIN tb_pedido pp ON pd.id_pedido = pp.id_pedido
        LEFT JOIN tb_cliente c ON pd.id_cliente = c.id_cliente
        WHERE c.id_cliente = ?

    `

    const [resp] = await connection.query(comando, [id]);
    return resp;
}

export async function inserirPedido(pedido) {
    const comando = `
    insert into tb_pedido (
        id_cliente,
        id_endereco,
        id_cartao,
        qtd_parcelas,
        vl_total,
        qtd_produtos,
        bt_enviado
    ) values (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        1
    )
    `;

    const [respo] = await connection.query(comando, [
        pedido.cliente,
        pedido.endereco,
        pedido.cartao,
        pedido.parcelas,
        pedido.total,
        pedido.quantidade
    ])

    return respo;
}