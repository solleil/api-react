import connection from './connection.js';


export async function inserir(admin) {
    let comando = `
        insert into tb_cliente (nm_cliente, ds_sobrenome, ds_telefone, ds_email, ds_cpf, dt_nasc, ds_senha)
        values (?, ?, ?, ?, ?, ?, ?)
    `;

    const info = await connection.query(comando, [
        admin.nome,
        admin.sobrenome,
        admin.cargo,
        admin.telefone,
        admin.email,
        admin.cpf,
        admin.nascimento,
        admin.senha
    ]);

    produto.id = info.insertId
    return info
}

export async function login(usuario) {
    const comando = `
    select * from tb_cliente where 
    ds_email = ? and
    ds_senha = ?`;

    const result = await connection.query(comando, [usuario.email, usuario.senha]);
    return result;
}

export async function alterar(usuario) {
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

    const result = await connection.query( comando, [
        usuario.nome,
        usuario.sobrenome,
        usuario.telefone,
        usuario.email,
        usuario.cpf,
        usuario.nascimento,
        usuario.senha,
        usuario.id
    ]);
    return result;

}


export async function deletar(id) {
    let comando = `
    delete from tb_cliente where id_cliente = ?
    `;


    const info = await connection.query(comando, [id])
    const infoar = info.AffectedRows
    return infoar
}


