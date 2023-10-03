import {connection} from './connection.js'

export async function listarNecessidade(){
    const comando= `
    select nm_necessidade as nome from tb_necessidade
    `
    const [resp] =  await connection.query(comando)
    return resp
}

export async function inserirNecessidade(){
    const comando= `
    insert into tb_necessidade(nm_necessidade)
    values(?)
    `

    const [resp] = await connection.query(comando)
    return resp
}