import { connection } from "./connection.js";

export async function listarTodosProduto() {
    let comando = `
    select 
        nm_produto      as nome,
        ds_produto      as descricao,
        ds_tamanho      as tamanho,
        id_categoria    as categoria,
        id_marca        as marca,
        id_necessidade  as necessidade,
        id_tipo_pele    as tipo_pele,
        vl_preco        as preco,
        bt_disponivel   as disponivel,
        qtd_estoque     as quantidade,
        id_ingr_atv     as ingrediente_atv,
        ds_indicacao    as indicacao
    from tb_produto;
    `
    let [resposta] = await connection.query(comando)
    return resposta;
};

export async function mostrarProdutosId(id) {
    const comando = `
    select
        id_produto      as id,
        nm_produto      as nome,
        ds_produto      as descricao,
        ds_tamanho      as tamanho,
        id_categoria    as categoria,
        id_marca        as marca,
        id_necessidade  as necessidade,
        id_tipo_pele    as tipo_pele,
        vl_preco        as preco,
        bt_disponivel   as disponivel,
        qtd_estoque     as quantidade,
        id_ingr_atv     as ingrediente_atv,
        ds_indicacao    as indicacao
    from tb_produto
    where id_produto = ?`;
    const [respo] = await connection.query(comando, [id])
    return respo[0];
};

export async function pesquisarProduto(produto) {
    const comando = `
    select 
        nm_produto      as nome,
        ds_produto      as descricao,
        ds_tamanho      as tamanho,
        id_categoria    as categoria,
        id_marca        as marca,
        id_necessidade  as necessidade,
        id_tipo_pele    as tipo_pele,
        vl_preco        as preco,
        bt_disponivel   as disponivel,
        qtd_estoque     as quantidade,
        id_ingr_atv     as ingrediente_atv,
        ds_indicacao    as indicacao
    from tb_produto
    where nm_produto like ?
    `;

    const [respo] = await connection.query(comando, [`%${produto.nome}%`]);
    return respo
}


export async function inserirProduto(produto) {
    const comando = `
    insert into tb_produto (
        nm_produto,
        ds_produto,
        ds_tamanho,
        ds_indicacao,
        vl_preco,
        bt_disponivel,
        bt_favorito,
        ds_ingrediente,
        qtd_estoque,
        id_tipo_pele,
        id_categoria,
        id_ingr_atv,
        id_marca,
        id_necessidade)
    values (
        ?, 
        ?,
        ?, 
        ?, 
        ?,
        ?,
        ?,
        ?,
        ?, 
        ?, 
        ?,
        ?, 
        ?, 
        ?)
    `;

    const info = await connection.query(comando, [
        produto.nome,
        produto.descricao,
        produto.tamanho,
        produto.indicacao,
        produto.preco,
        produto.disponivel,
        produto.favorito,
        produto.ingrediente,
        produto.estoque,
        produto.tipo_pele,
        produto.categoria,
        produto.ingrediente_atv,
        produto.marca,
        produto.necessidade
    ]);

    produto.id = info.insertId
    return info
}

//reparar
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
        bt_disponivel = ?, 
        qtd_estoque = ?,
        id_ingr_atv = ?, 
        ds_indicacoes = ?, 
        where id_produto = ?
    `;

    const result = await connection.query(comando, [
        produto.nome,
        produto.desc,
        produto.tamanho,
        produto.categoria,
        produto.marca,
        produto.necessidade,
        produto.tipodepele,
        produto.preco,
        produto.estoque,
        produto.ingrativo,
        produto.indicacoes,
        produto.id
    ]);
    return result;
}

export async function deletarProduto(id) {
    let comando = `
    delete from tb_produto where id_produto = ?
    `;
    const info = await connection.query(comando, [id])
    const infoar = info.AffectedRows
    return infoar
}


