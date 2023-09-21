import { inserirProduto, listarTodosProduto, deletarProduto, alterarProduto } from '../repository/produtoRepository.js';
import { Router } from 'express';

const server = Router()

server.get(('/produto'), async (req, resp) => {

  try {

    const respo = await listarTodosProduto();
    resp.send(respo);

  }

  catch (err) {

    resp.status(404).send({erro: err.message });

  }

})


server.post(('/produto'), async (req, resp) => {

  try {

    const respo = req.body;
    const { dados } = await inserirProduto(respo)
    resp.send(dados)

  }

  catch (err) {

    resp.status(404).send({erro: err.message});

  }

})

server.put('/alterar/produto', async (req, resp) => {

  try {

    const respo = req.body;
    const { dados } = await alterarProduto(respo);
    resp.send(dados);

  }

  catch (err) {

    resp.status(500).send({erro: err.message});

  }

})

server.delete(('/produto/:id'), async (req, resp) => {
  try {

    const id = req.params.id;
    const { dados } = await deletarProduto(id);
    resp.send(dados)

  } 
  
  catch (err) {

    resp.status(404).send({erro: err.message});

  }
})

export default server;