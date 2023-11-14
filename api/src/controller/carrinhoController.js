import { listarCarrinho, inserirCarrinho } from '../repository/carrinhoRepository.js'
import { Router } from 'express'


const server = Router()


server.get(('/carrinho'), async (req, resp) => {

    try {
        const resp = await listarCarrinho();
        resp.send(resposta)

    } catch (err) {
        resp.status(404).send({ erro: err.mensage })
    }

})


server.post(('/carrinho'), async (req, resp) => {

    try {
        const body = req.body;
    
        const resp = await inserirCarrinho(body);
        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({ erro: err.mensage })
    }

})


export default server