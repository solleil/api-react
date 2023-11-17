import { Router } from 'express';
import { listarTodosUsuario, inserirUsuario, deletarUsuario, alterarUsuario, loginUsuario, listarUsuarioporId } from '../repository/usuarioRepository.js';

const server = Router()

server.get(('/cliente'), async (req, resp) => {

    try {
        const respo = await listarTodosUsuario();
        resp.send(respo);
    }

    catch (err) {

        resp.status(404).send({ erro: err.message })

    }
})

server.get(('/cliente/:id'), async (req, resp) => {

    try {
        const params = req.params.id
        const respo = await listarUsuarioporId(params);
        resp.send(respo);
    }

    catch (err) {

        resp.status(404).send({ erro: err.message })

    }
})

server.post('/cliente', async (req, resp) => {
    try {
        const body = req.body

        const resposta = await inserirUsuario(body);
        resp.send(resposta);

    } 

    catch (err) {

        resp.status(404).send({ erro: err.message })

    }

})

server.post(('/login/cliente'), async (req, resp) => {

    try {
        const body = req.body;
        if (!body.email) {
            throw new Error('Email é um campo obrigatório');
        };

        if (!body.senha) {
            throw new Error('Senha é um campo obrigatório');
        };

        const r = await loginUsuario(body);
        if (!r) {
            throw new Error('Email ou Senha incorretos')
        }

        resp.send(r);
    }

    catch (err) {
        resp.status(401).send({ erro: err.message })
    }

});

server.put('/cliente/alterar/:id', async (req, resp) => {

    try {
        const { id } = req.params;
        const usuario = req.body;

        const respo = await alterarUsuario(usuario, id);

        if (respo != 1) {
            throw new Error( 'Usuario inexistente' );
        } else {
            resp.status(204).send();
        } 
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
        
    }
});

server.delete(('/cliente/:id'), async (req, resp) => {

    try {
        const params = req.params.id;
        const verifica = await listarUsuarioporId(params);
        if (!verifica) {
            throw new Error('Usuario inexistente')
        };
        const { dados } = await deletarUsuario(params);
        resp.send(dados)

    }

    catch (err) {

        resp.status(404).send({ erro: err.message })

    }

})

export default server;