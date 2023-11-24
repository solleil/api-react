import { connection } from './connection.js';


export async function listarCartao() {
    const comando = `
    select
        nm_cartao       as nome,
        ds_cvc          as cvc,
        ds_numero       as numero,
        ds_validade     as validade,
        id_cliente      as cliente
    from tb_cartao
    `;

    const [resp] = await connection.query(comando)
    return resp;

}

export async function listarCartaoid(id) {
    const comando = `
    select
        id_cartao       as id,
        nm_cartao       as nome,
        ds_cvc          as cvc,
        ds_numero       as numero,
        ds_validade     as validade,
        id_cliente      as cliente      
    from tb_cartao
    where id_cliente = ?
    `;

    const [resp] = await connection.query(comando, [id])
    return resp[0]
}

export async function inserirCartao(cartao) {
    const comando = `
    insert into tb_cartao(
        nm_cartao,
        ds_cvc, 
        ds_numero, 
        ds_validade, 
        id_cliente)
    values(?, ?, ?, ?, ?)
    `;

    const [resp] = await connection.query(comando, [
        cartao.nome,
        cartao.cvc,
        cartao.numero,
        cartao.validade,
        cartao.cliente
    ]);

    return resp.affectedRows
}

export async function deletaCartao(id) {
    const comando = `
    delete from tb_cartao where id_cliente = ?
    `;

    const [resp] = await connection.query(comando, [id]);
    return resp;
}

export async function alterarCartao(id, cartao) {
    const comando = `
            update tb_cartao
            set
            
            nm_cartao           =   ?,
            ds_cvc              =   ?,
            ds_numero           =   ?,
            ds_validade         =   ?
            
            where id_cartao     = ?
    `

    const [respo] = await connection.query(comando, [
        cartao.nome,
        cartao.cvc,
        cartao.numero,
        cartao.validade,
        cartao.cliente,
        id
    ])
    return respo.affectedRows;

}