import connection from './connection.js';

//GET DOS USUARIOS
export async function listarTodosUsuario() {

    const comando = `
        select
        nm_cliente      as nome,
        ds_sobrenome    as sobrenome,
        ds_telefone     as telefone,
        ds_email        as email,
        ds_cpf          as cpf,
        dt_nasc         as nascimento
        from tb_cliente
    `;

    const [result] = await connection.query(comando)
    return result;

}

//POST DOS USUARIOS
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
        usuario.nascimento,
        usuario.senha
    ]);

    return result;

}

//GET DOS USUARIOS
export async function loginUsuario(usuario) {

    const comando = `
        select * 
        from tb_cliente 
        where 
        ds_email = ? and
        ds_senha = ?
    `;

    const [result] = await connection.query(comando, [usuario.email, usuario.senha]);
    return result;
    
}

//PUT DOS USUARIOS
export async function alterarUsuario(usuario) {
    const comando = `
        update tb_cliente
        set 
            nm_cliente = ?,
            ds_sobrenome = ?, 
            ds_telefone = ?, 
            ds_email = ?, 
            ds_cpf = ?, 
            dt_nasc = ?, 
            ds_senha = ?
        where id_cliente = ?
    `;

    const [result] = await connection.query(comando, [
        usuario.nome,
        usuario.sobrenome,
        usuario.telefone,
        usuario.email,
        usuario.cpf,
        usuario.nascimento,
        usuario.senha,
        usuario.id
    ]);

    const resultAR = result.AffectedRows;
    return resultAR;

}

//DELETE DOS USUARIOS
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