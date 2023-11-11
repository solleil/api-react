// import {connection} from './connection.js'

// export async function listarPedido(){
//     const comando=`
//     select
//     id_pedido  as pedido,
//     id_cliente as cliente,
//     id_endereco as endereco,
//     id_cartao   as cartao,
//     qtd_parcelas  as parcelas,
//     dt_pedido   as data,
//     ds_situacao  as situacao
//     from tb_pedido
//     `

//     const [resp]= await connection.query(comando)
//     return resp
// }