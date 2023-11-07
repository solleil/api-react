import { Router } from 'express';
import { listarTodosUsuario, inserirUsuario, deletarUsuario, alterarUsuario, loginUsuario } from '../repository/usuarioRepository.js';

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

server.post('/cliente', async (req, resp) => {
    try {
        const usuario = req.body

        const resposta = await inserirUsuario(usuario);
        resp.send(resposta);

    } 

    catch (err) {

        resp.status(404).send({ erro: err.message })

    }

})

server.post(('/login/cliente'), async (req, resp) => {

    try {
        const body = req.body;
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

server.put('/alterar/cliente', async (req, resp) => {

    try {

        const respo = req.body;
        const { dados } = await alterarUsuario(respo);
        resp.send(dados);

    }

    catch (err) {

        resp.status(404).send({ erro: err.message });

    }

})

server.delete(('/cliente/:id'), async (req, resp) => {

    try {

        const id = req.params.id;
        const { dados } = await deletarUsuario(id);
        resp.send(dados)

    }

    catch (err) {

        resp.status(404).send({ erro: err.message })

    }

})

export default server;