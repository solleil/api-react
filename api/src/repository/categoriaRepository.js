import {connection} from './connection.js'

export async function listarCategoria(){
    const comando= `
    select id_categoria as id, nm_categoria as nome from tb_categoria
    `;

    const [resp] = await connection.query(comando)
    return resp
};

export async function inserirCategoria(categoria){
    const comando= `
    insert into tb_categoria(nm_categoria)
    values(?) 
    `

    const [resp] = await connection.query(comando, [
        categoria.nome
    ])
    return resp
}