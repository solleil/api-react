import { connection } from "./connection.js";


export async function listarTodosProduto() {
    let comando= `
        select * from tb_produto
    `
    let [ resposta ] = await connection.query(comando)
    return resposta;
}

export async function pesquisarProduto() {
    const comando = `
    select 
    nm_produto          as nome, 
    from tb_produto where
    nm_produto like % ? %
    `;

    const [respo] = await connection.query(comando);
    return respo
}


export async function inserirProduto(produto){
    let comando = `
        insert into tb_produto (
            nm_produto, 
            ds_produto, 
            ds_tamanho, 
            id_categoria, 
            id_marca, 
            id_necessidade, 
            id_tipo_pele,
            vl_preco, 
            qtd_estoque,
            id_ingr_atv, 
            ds_indicacoes, 
        values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const info = await connection.query(comando, [
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
        produto.indicacoes
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
        bt_disponivel = ?, 
        qtd_estoque = ?,
        id_ingr_atv = ?, 
        ds_indicacoes = ?, 
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
        produto.estoque,
        produto.ingrativo,
        produto.indicacoes,
        produto.id
    ]);
    return result;
}

export async function deletarProduto(id){
    let comando = `
    delete from tb_produto where id_produto = ?
    `;
    const info= await connection.query(comando, [id])
    const infoar= info.AffectedRows
    return infoar
}


