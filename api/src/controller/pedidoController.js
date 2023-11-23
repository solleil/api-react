import { listarPedido, listarPedidopPorID } from '../repository/pedidoRepository.js';
import { Router } from 'express';

const server = Router()

server.get('/pedidos', async (req, resp) => {
    try {
        const resposta = await listarPedido()
        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

server.get('/pedidos/:id', async (req, resp) => {
    try {

        const { id } = req.params
        const resposta = await listarPedidopPorID(id)
        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

export default server;