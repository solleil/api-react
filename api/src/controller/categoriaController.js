import { listarCategoria, inserirCategoria, listarCategoriaID } from '../repository/categoriaRepository.js';
import { Router } from 'express';

const server = Router();

server.get(('/categoria'), async (req, resp) => {
  try {
    const resposta = await listarCategoria();
    resp.send(resposta);
  }
  catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

server.get(('/categoria/:id'), async (req, resp) => {
  try {
    const params = req.params.id;
    const respo = await listarCategoriaID(params);
    resp.send(respo)
  } catch (err) {
    resp.status(404).send({erro: err.message});
  }
})

server.post(('/categoria'), async (req, resp) => {
  try {
    const respo = req.body;
    const dados = await inserirCategoria(respo)
    resp.send(dados)
  }
  catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

export default server;