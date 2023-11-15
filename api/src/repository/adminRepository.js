import { connection } from './connection.js';

export async function listarAdmin() {
    const comando = `
        select
            id_admin            as id
            nm_admin            as nome,
            ds_sobrenome        as sobrenome,
            ds_cargo            as cargo,-  
            ds_email            as email,
        from tb_admin;
    `;
        
    const [resp] = await connection.query(comando)
    return resp;
}


export async function inserirAdmin(admin) {
    let comando = `
        insert into tb_cliente (nm_cliente, ds_sobrenome, ds_telefone, ds_email, ds_cpf, dt_nasc, ds_senha)
        values (?, ?, ?, ?, ?, ?, ?)
    `;

    const [info] = await connection.query(comando, [
        admin.nome,
        admin.sobrenome,
        admin.cargo,
        admin.email,
        admin.cpf,
        admin.senha
    ]);
    
}

export async function loginAdmin(admin) {
    const comando = `
    select 
        id_admin	as id,
        ds_email	as email
    from tb_admin where 
        ds_email = ? 
        and
        ds_senha = ?
    `;

    const [result] = await connection.query(comando, [admin.email, admin.senha]);
    return result[0];
}

export async function alterarAdmin(usuario) {
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

    const [result] = await connection.query( comando, [
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


export async function deletarAdmin(id) {
    let comando = `
    delete from tb_admin where id_admin = ?
    `;
    
    const info = await connection.query(comando, [id])
    return info
}


