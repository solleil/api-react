import { connection } from './connection.js'

export async function listarMarcas() {
    const comando = `
    select 
    id_marca as id, 
    nm_marca as nome
    from tb_marca
    `
    const [resp] = await connection.query(comando)
    return resp
}

export async function listarMarcaId(id) {
    const comando = `
    select 
        nm_marca as nome
    from tb_marca
    where id_marca = ?
    `;

    const [respo] = await connection.query(comando, [id]);
    return respo[0]
}

export async function inserirMarcas() {
    const comando = `
    insert into tb_marca(nm_marca)
    values(?)
    `
}