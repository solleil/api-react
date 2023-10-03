import { connection } from './connection.js';


export async function listarCartao(){
    const comando= `select
     nm_cartao as nome,
     ds_cvc    as cvs,
     ds_numero as numero,
     ds_validade as validade

     from tb_cartao`

    const [resp] = await connection.query(comando)
    return resp

}

export async function inserirCartao(){
    const comando= `
    insert into tb_cartao(nm_cartao, ds_cvc, ds_numero, ds_validade)
    values(?,?,?,?)
    `
    const [resp] = await connection.query(comando)
    return resp
}