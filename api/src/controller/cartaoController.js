import { listarCartao, inserirCartao, listarCartaoid, deletaCartao, alterarCartao } from '../repository/cartaoRepository.js';
import { Router } from 'express';

const server = Router()

server.get(('/cartao'), async (req, resp) => {
  try {
    const resposta = await listarCartao();
    resp.send(resposta);
  }
  catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

server.get(('/cartao/:id'), async (req, resp) => {

  try {
      const params = req.params.id
      const respo = await listarCartaoid(params);
      resp.send(respo);
  }

  catch (err) {

      resp.status(404).send({ erro: err.message })

  }
})

server.post(('/cartao'), async (req, resp) => {
    try {
      const respo = req.body;
      const { dados } = await inserirCartao(respo)
      resp.send(dados)
    }
    catch (err) {
      resp.status(404).send({ erro: err.message });
    }
  })

  server.delete(('/cartao/:id'), async (req, resp) => {
    try {
      const params = req.params.id;
      const respo = await deletaCartao(params);
      resp.send(respo)
    } catch (err) {
      resp.status(404).send({ erro: err.message })
    }
  })

  server.put('/cartao/:id', async (req, resp) => {
    try {
      const params = req.params.id;
      const respo = req.body;
      await alterarCartao(params, respo);
      resp.sendStatus(204);
  
    } catch (err) {
      resp.status(404).send({ erro: err.message });
    }
  })
  

  export default server;