import { connection } from "./connection.js";

export async function listarTodosProduto() {
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
        ds_indicacao    as indicacao,
        img_produto     as imagem
    from tb_produto
    `
    const [resposta] = await connection.query(comando)
    return resposta;
};

export async function listarProdutosFav() {
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
        ds_indicacao    as indicacao,
        img_produto     as imagem
    from tb_produto
    where bt_favorito = 1
    `;

    const [respo] = await connection.query(comando);
    return respo;
}

export async function buscaProdutoFiltro(prdNome, prdId) {
    const comando = `
    select 
        id_produto as id,
        nm_produto as nome,
        vl_preco as preco,
        bt_disponivel as disponivel
    from tb_produto 
    where (nm_produto like ? or id_produto = ?)
    `;
    
    const [respo] = await connection.query(comando, [`%${prdNome}%`, prdId]);
    
    return respo;
}

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
        ds_ingrediente  as ingrediente,
        bt_disponivel   as disponivel,
        qtd_estoque     as quantidade,
        id_ingr_atv     as ingrediente_atv,
        ds_indicacao    as indicacao,
        img_produto     as imagem
    from tb_produto
    where id_produto = ?`;
    const [respo] = await connection.query(comando, [id])
    return respo[0];
};

export async function filtroProdutoID(idc, idm, idn, idtt) {
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
        ds_ingrediente  as ingrediente,
        bt_disponivel   as disponivel,
        qtd_estoque     as quantidade,
        id_ingr_atv     as ingrediente_atv,
        ds_indicacao    as indicacao,
        img_produto     as imagem
    from tb_produto
    where (id_categoria = ? or id_marca = ? or id_necessidade = ? or id_tipo_pele = ?);
    `;

    const [respo] = await connection.query(comando, [idc, idm, idn, idtt])
    return respo;

}

export async function pesquisarProduto(nome) {
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

    const [respo] = await connection.query(comando, [`%${nome}%`]);
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
        ?)
    `;

    const [info] = await connection.query(comando, [
        produto.nome,
        produto.descricao,
        produto.tamanho,
        produto.indicacao,
        produto.preco,
        produto.disponivel,
        produto.ingrediente,
        produto.estoque,
        produto.tipo_pele,
        produto.categoria,
        produto.ingrediente_atv,
        produto.marca,
        produto.necessidade
    ]);
    return info;
}

export async function alterarProduto(produto) {
    const comando = `
        update tb_produto
        set 
            nm_produto = ?,
            ds_produto = ?,
            ds_tamanho = ?,
            ds_indicacao = ?,
            vl_preco = ?,
            bt_disponivel = ?,
            ds_ingrediente = ?,
            qtd_estoque = ?,
            id_tipo_pele = ?,
            id_categoria = ?,
            id_ingr_atv = ?,
            id_marca = ?,
            id_necessidade = ?
        where 
        id_produto = ?
    `;

    const [result] = await connection.query(comando, [
        produto.nome,
        produto.descricao,
        produto.tamanho,
        produto.indicacao,
        produto.preco,
        produto.disponivel,
        produto.ingrediente,
        produto.estoque,
        produto.tipo_pele,
        produto.categoria,
        produto.ingrediente_atv,
        produto.marca,
        produto.necessidade,
        produto.id
    ]);
    return result;
}

export async function favoritarProduto(fav, id) {
    const comando = `
    update tb_produto 
    set 
		bt_favorito = ?
	where id_produto = ?
    `;

    const [respo] = await connection.query(comando, [fav, id]);
    return respo
}

export async function deletarProduto(id) {
    const comando = `
    delete from tb_produto where id_produto = ?
    `;
    const [info] = await connection.query(comando, [id])
    return info
}

export async function inserirImagemProduto(imagem, id) {
    const comando = `
    update tb_produto 
    set 
    img_produto = ? 
    where 
    id_produto = ?
    `;
    
    const [respo] = await connection.query(comando, [imagem, id])
    return respo
}