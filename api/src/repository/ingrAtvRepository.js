import {connection} from './connection.js'

export async function listarIngredientesAtivos(){
    const comando= `
    select 
    id_ingrediente as id,
    nm_ingrediente  as nome,
    ds_ingrediente  as descricao
    from tb_ingr_atv
    `
    const [resp]= await connection.query(comando)
    return resp
}

export async function inserirIngredientesAtivos(){
    const comando=`
    insert into tb_ingr_atv(nm_ingrediente, ds_ingrediente)
    values(?,?)
    `
    const [resp]= await connection.query(comando)
    return resp
}

