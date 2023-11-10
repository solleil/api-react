import { connection } from './connection.js';


export async function listarCartao(){
    const comando= `
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

export async function inserirCartao(cartao){
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