import { listarEndereco, inserirEndereco, deletarEndereco, listarDadosEndereco, alterarEndereco } from '../repository/enderecoRepository.js';
import { Router } from 'express';

const server = Router();

server.get(('/endereco'), async (req, resp) => {
  try {
    const resposta = await listarEndereco();
    resp.send(resposta);
  }
  catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

server.get(('/endereco/:id'), async (req, resp) => {
  try {
    const params = req.params.id;
    const respo = await listarDadosEndereco(params);
    resp.send(respo);

  } catch (err) {
    resp.status(404).send({ erro: err.message })
  }
})

server.post(('/endereco'), async (req, resp) => {
  try {
    const respo = req.body;
    const dados = await inserirEndereco(respo)
    resp.send(dados)
  }
  catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

server.delete(('/endereco/:id'), async (req, resp) => {
  try {
    const params = req.params.id;
    const respo = await deletarEndereco(params);
    resp.send(respo)
  } catch (err) {
    resp.status(404).send({ erro: err.message })
  }
})

server.put('/endereco/:id', async (req, resp) => {
  try {
    const params = req.params.id;
    const respo = req.body;
    const dados = await alterarEndereco(params, respo);
    resp.send(dados);

  } catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

export default server;