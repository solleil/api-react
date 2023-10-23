import { connection } from "./connection.js";


export async function listarTodosProduto() {
    let comando= `
        select * from tb_produto
    `
    let [ resposta ] = await connection.query(comando)
    return resposta;
}


export async function inserirProduto(produto){
    let comando = `
        insert into tb_produto (id_produto, nm_produto, ds_produto, ds_tamanho, id_marca, id_necessidade, id_tipo_pele, vl_preco, vl_preco_promo, bt_disponivel, qtd_estoque,id_ingr_atv, ds_detalhes, ds_avaliacao)
        values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const info = await connection.query(comando, [
        produto.idProduto,
        produto.nome,
        produto.desc,
        produto.tamanho,
        produto.marca,
        produto.necessidade,
        produto.tipodepele,
        produto.preco,
        produto.promo,
        produto.disponivel,
        produto.estoque,
        produto.ingrativo,
        produto.detalhes,
        produto.avaliacao
    ]);

    produto.id = info.insertId
    return info
}


export async function alterarProduto(produto) {
    const comando = `
        update tb_cliente
        set 
        nm_produto = ?,
        ds_produto = ?, 
        ds_tamanho = ?, 
        id_categoria = ?, 
        id_marca = ?, 
        id_necessidade = ?, 
        id_tipo_pele = ?, 
        vl_preco = ?, 
        vl_preco_promo = ?, 
        bt_disponivel = ?, 
        qtd_estoque = ?,
        id_ingr_atv = ?, 
        ds_detalhes = ?, 
        ds_avaliacao
        where id_produto = ?
    `;

    const result = await connection.query( comando, [
        produto.nome,
        produto.desc,
        produto.tamanho,
        produto.categoria,
        produto.marca,
        produto.necessidade,
        produto.tipodepele,
        produto.preco,
        produto.promo,
        produto.disponivel,
        produto.estoque,
        produto.ingrativo,
        produto.detalhes,
        produto.avaliacao,
        produto.id
    ]);
    return result;
}

export async function deletarProduto(id){
    let comando = `
    delete from tb_produto where id_produto = ?
    `
    

    const info= await connection.query(comando, [id])
    const infoar= info.AffectedRows
    return infoar
}

export async function listarMarcasProduto() {
    const comando = 
    `
    select 
    id_marca         as id,
    nm_marca       as categoriaMarca
    from tb_marca
    `

    const [resposta] = await connection.query(comando);
    return resposta;
}

export async function listarNecessidades() {
    const comando = 
    `
    select 
    id_necessidade        as id,
    nm_necessidade      as categoriaNecessidade
    from tb_necessidade
    `

    const [resposta] = await connection.query(comando);
    return resposta;
}

export async function listarTiposdePele() {
    const comando = 
    `
    select 
    id_tipo        as id,
    nm_tipo_pele    as categoriaTiposDePele
    from tb_tipo_pele
    `

    const [resposta] = await connection.query(comando);
    return resposta;
}

export async function listarIngredientes() {
    const comando = 
    `
    select 
    id_ingrediente        as id,
    nm_ingrediente	    as nomeIngrediente
    from tb_ingr_atv
    `

    const [resposta] = await connection.query(comando);
    return resposta;
}


