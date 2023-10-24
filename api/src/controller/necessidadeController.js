import { listarNecessidade, inserirNecessidade} from '../repository/necessidadeRepository.js';
import { Router } from 'express';

const server = Router()

server.get(('/necessidades'), async (req, resp) => {
  try {
    const resposta = await listarNecessidade();
    resp.send(resposta);
  }
  catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

server.post(('/necessidades'), async (req, resp) => {
    try {
      const respo = req.body;
      const { dados } = await inserirNecessidade(respo)
      resp.send(dados)
    }
    catch (err) {
      resp.status(404).send({ erro: err.message });
    }
  })

  export default server;