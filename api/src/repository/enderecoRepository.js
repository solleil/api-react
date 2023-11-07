import { connection } from './connection.js'


export async function listarEndereco() {
    const comando = `
    select 
    ds_cep   as cep,
    ds_endereco  as endereco,
    nr_endereco  as numero,
    ds_cidade    as cidade
    from tb_endereco
    `

    const [resp] = await connection.query(comando)
    return resp
}

export async function inserirEndereco(endereco) {
    const comando = `
    insert into tb_endereco(ds_cep,
         ds_rua, 
         nr_endereco, 
         ds_cidade, 
         ds_bairro, 
         ds_cliente, 
         id_cliente)
    values(?, ?, ?, ?, ?, ?)
    `
    const [resp] = await connection.query(comando, [
        endereco.cep,
        endereco.rua,
        endereco.numero,
    ])
    return resp
}