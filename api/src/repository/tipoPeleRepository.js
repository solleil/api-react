import {connection} from './connection.js'

export async function listarTipoPele(){
    const comando=`
    select 
    id_tipo      as id,
    nm_tipo_pele as nome
    from tb_tipo_pele
    `

    const [resp] = await connection.query(comando)
    return resp
}

export async function inserirTipoPele(){
    const comando=`
    insert into tb_tipo_pele(nm_tipo_pele)
    values(?)
    `
    const [resp] = await connection.query(comando)
    return resp
}