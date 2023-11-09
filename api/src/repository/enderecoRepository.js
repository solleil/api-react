import { connection } from './connection.js'


export async function listarEndereco() {
    const comando = `
    select
        ds_cep          as cep,
        ds_rua          as rua,
        nr_endereco     as endereco,
        ds_cidade       as cidade,
        ds_bairro       as bairro,
        id_cliente      as cliente
    from tb_endereco
    `;

    const [resp] = await connection.query(comando)
    return resp
}

export async function listarDadosEndereco(id) {
    const comando = `
    select
        ds_cep          as cep,
        ds_rua          as rua,
        nr_endereco     as endereco,
        ds_cidade       as cidade,
        ds_bairro       as bairro,
        id_cliente      as cliente
    from tb_endereco
    where id_cliente = ?
    `;

    const [respo] = await connection.query(comando, [id])
    return respo;
}

export async function inserirEndereco(endereco) {
    const comando = `
    insert into tb_endereco(
         ds_cep,
         ds_rua, 
         nr_endereco, 
         ds_cidade, 
         ds_bairro, 
         id_cliente)
    values(?, ?, ?, ?, ?, ?)
    `
    const [resp] = await connection.query(comando, [
        endereco.cep,
        endereco.rua,
        endereco.numero,
        endereco.cidade,
        endereco.bairro,
        endereco.cliente
    ]);
    return resp;
}

export async function deletarEndereco(id) {
    const comando = `
    delete from tb_endereco where id_endereco = ?
    `;

    const [resp] = await connection.query(comando, [id]);
    return resp;
}
