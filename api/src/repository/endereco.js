import {connection} from './connection.js'


export async function listarEndereco(){
    const comando= `
    select 
    ds_cep   as cep,
    ds_endereco  as endereco,
    nr_endereco  as numero,
    ds_cidade    as cidade
    from tb_endereco
    `

    const [resp]= await connection.query(comando)
    return resp
}

export async function inserirEndereco(){
    const comando=`
    insert into tb_endereco(ds_cep, ds_endereco, nr_endereco, ds_cidade)
    values(?, ?, ?, ?)
    `
    const [resp]= await connection.query(comando)
    return resp
}