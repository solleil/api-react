 import {connection} from './connection.js'

 export async function listarPedido(){
     const comando=`
     SELECT
            pd.id_pedido       as idpedido,
            pd.dt_pedido       as data,
            c.nm_cliente       as nome,
            pd.bt_enviado      as enviado
            
            
        FROM
            tb_pedido pd
        LEFT JOIN tb_pedido pp ON pd.id_pedido = pp.id_pedido
        LEFT JOIN tb_cliente c ON pd.id_cliente = c.id_cliente
     `

     const [resp]= await connection.query(comando)
     return resp
 }

 export async function listarPedidopPorID(id) {
    const comando = `
    SELECT
            pd.id_pedido       as idpedido,
            pd.dt_pedido       as data,
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