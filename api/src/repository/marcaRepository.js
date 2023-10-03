import {connection} from './connection.js'

export async function listarMarcas(){
    const comando= `
    select 
    nm_marca as nome
    from tb_marca
    `
    const [resp]= await connection.query(comando)
    return resp
}

export async function inserirMarcas(){
    const comando=`
    insert into tb_marca(nm_marca)
    values(?)
    `
}