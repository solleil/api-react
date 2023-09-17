import { Router } from 'express';
import { listarTodos, inserir, deletar, alterar } from '../repository/usuarioRepository';
const server = Router()

server.get(('/clientes'), async (req, resp) => {
    try {
        const resposta = await listarTodos();
        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({ erro: err.message })
    }
})


server.post(('/cliente'), async (req, resp) => {
    try {
        let x = req.body;
        let dados = await inserir(x)
        resp.send(dados)
    } catch (error) {
        resp.status(404).send({ erro: err.message })
    }

})

server.post(('/cliente/login'), async (req, resp) => {
    try {
        let x = req.body;
        let dados = await inserir(x)
        resp.send(dados)
    } catch (error) {
        resp.status(404).send({ erro: err.message })
    }

});

server.put('/alterar', async (req,resp) =>{
    
    try {
        const usuarioAlterado = req.body;
        const {respo} = await alterar(usuarioAlterado);
        resp.send(respo);
    } catch (err) {
        resp.status(500).send({erro:err.message});
    }
})

server.delete(('/cliente/:id'), async (req, resp) => {
    try {
        let id = req.params.id;
        let x = await deletar(id);
        resp.send()

    } catch (err) {
        resp.status(404).send({ erro: err.message })
    }
})

export default server;