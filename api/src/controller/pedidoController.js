import { inserirPedido, listarPedido, listarPedido2, listarPedidopPorID } from '../repository/pedidoRepository.js';
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

server.get(('/pedido'), async (req, resp) => {
    try {
        const respo = await listarPedido2()
        resp.send(respo)
    } catch (err) {
        resp.status(404).send({erro: err.message});
    }
})

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

server.post(('/pedido'), async (req, resp) => {
    try {
        const body = req.body;
        await inserirPedido(body);
        resp.sendStatus(201);
    } catch (err) {
        resp.send({erro: err.message});
    }
})

export default server;