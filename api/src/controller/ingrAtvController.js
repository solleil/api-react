import { listarIngredientesAtivos, inserirIngredientesAtivos } from '../repository/ingrAtvRepository.js';
import { Router } from 'express';

const server = Router()

server.get(('/ingredienteAtivo'), async (req, resp) => {
  try {
    const resposta = await listarIngredientesAtivos();
    resp.send(resposta);
  }
  catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

server.post(('/ingredienteAtivo'), async (req, resp) => {
  try {
    const respo = req.body;
    const { dados } = await inserirIngredientesAtivos(respo)
    resp.send(dados)
  }
  catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

export default server;