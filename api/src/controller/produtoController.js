import { inserirProduto, listarTodosProduto, deletarProduto, alterarProduto, pesquisarProduto, mostrarProdutosId, inserirImagemProduto } from '../repository/produtoRepository.js';
import { Router } from 'express';

import multer from 'multer';
const upload = multer({ dest: 'storage/fotos_gerais_produtos' });

const server = Router()

server.get(('/produto'), async (req, resp) => {
  try {
    const resposta = await listarTodosProduto();
    resp.send(resposta);
  }
  catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

server.get(('/produto/:id'), async (req, resp) => {
  try {
    const params = req.params.id;
    const resposta = await mostrarProdutosId(params)
    if (!resposta) {
      resp.status(404).send([]);
    }
    else {
      resp.send(resposta);
    }
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    });
  }
});

server.get(('/pesquisa/produto'), async (req, resp) => {
  try {
    const query = req.query;
    const respo = await pesquisarProduto(query);
    resp.send(respo);
  } catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

server.post('/produto', async (req, resp) => {
  try {
    const body = req.body;
    const dados = await inserirProduto(body)
    resp.send(dados)
  }
  catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

server.put('/alterar/produto', async (req, resp) => {
  try {
    const body = req.body;
    const { dados } = await alterarProduto(body);
    resp.send(dados);
  }
  catch (err) {
    resp.status(400).send({ erro: err.message });
  }
})

server.delete(('/produto/:id'), async (req, resp) => {
  try {
    const id = req.params.id;
    const dados = await deletarProduto(id);
    resp.send(dados)
  }
  catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

server.put(('/imagem/produto/:id'), upload.single('foto_produto'), async (req, resp) => {
  try {
    const idProduto = req.params.id;
    const imagem = req.file.path;
    const respo = await inserirImagemProduto(imagem, idProduto);

    resp.status(204).send()

  } catch (err) {
    resp.status(400).send({ erro: err.message });
  };
});

export default server;