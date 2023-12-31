import { connection } from './connection.js';

export async function listarTodosUsuario() {
    const comando = `
        select
            id_cliente      as id,
            nm_cliente      as nome,
            ds_sobrenome    as sobrenome,
            ds_telefone     as telefone,
            ds_email        as email,
            ds_cpf          as cpf,
            dt_nasc         as nascimento,
            ds_senha        as senha
        from tb_cliente
    `;

    const [result] = await connection.query(comando)
    return result;
};

export async function listarUsuarioporId(id) {
    const comando = `
    select
        id_cliente      as id,
        nm_cliente      as nome,
        ds_sobrenome    as sobrenome,
        ds_telefone     as telefone,
        ds_email        as email,
        ds_cpf          as cpf,
        dt_nasc         as nascimento,
        ds_senha        as senha
    from tb_cliente
    where id_cliente = ?
    `;

    const [respo] = await connection.query(comando, [id])
    return respo[0];
}


export async function inserirUsuario(usuario) {

    const comando = `
        insert into tb_cliente (
            nm_cliente, 
            ds_sobrenome, 
            ds_telefone, 
            ds_email, 
            ds_cpf, 
            dt_nasc, 
            ds_senha)
        values (?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await connection.query(comando, [
        usuario.nome,
        usuario.sobrenome,
        usuario.telefone,
        usuario.email,
        usuario.cpf,
        usuario.nasc,
        usuario.senha
    ]);

    return result;

};

export async function loginUsuario(usuario) {
    const comando = `      
    select 
        id_cliente  as id,
        ds_email    as email
    from tb_cliente 
    where 
        ds_email = ? 
        and
        ds_senha = ?
    `;

    const [result] = await connection.query(comando, [usuario.email, usuario.senha]);
    return result[0];
};

export async function alterarUsuario(usuario, id) {
    const comando = `
        update tb_cliente
        set 
            nm_cliente = ?,
            ds_sobrenome = ?, 
            ds_telefone = ?, 
            ds_email = ?, 
            ds_cpf = ?
            
        where id_cliente = ?
    `;

    const [result] = await connection.query(comando, [
        usuario.nome,
        usuario.sobrenome,
        usuario.telefone,
        usuario.email,
        usuario.cpf,
        id
    ]);

    const resultAR = result.AffectedRows;
    return resultAR;

}

export async function deletarUsuario(id) {
    const comando = `
    delete 
    from tb_cliente 
    where id_cliente = ?
    `;

    const [result] = await connection.query(comando, [id])
    const resultAR = result.AffectedRows
    return resultAR
}