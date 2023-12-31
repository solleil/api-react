import { listarMarcas, inserirMarcas, listarMarcaId } from '../repository/marcaRepository.js';
import { Router } from 'express';

const server = Router()

server.get(('/marca'), async (req, resp) => {
  try {
    const resposta = await listarMarcas();
    resp.send(resposta);
  }
  catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

server.get(('/marca/:id'), async (req, resp) => {
  try {
    const params = req.params.id;
    const respo = await listarMarcaId(params);
    resp.send(respo)
  } catch (err) {
    resp.status(404).send({erro: err.message});
  }
})

server.post(('/marca'), async (req, resp) => {
  try {
    const respo = req.body;
    const { dados } = await inserirMarcas(respo)
    resp.send(dados)
  }
  catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

export default server;