import { inserirProduto, listarTodosProduto, deletarProduto, alterarProduto, listarMarcasProduto,listarNecessidades, listarTiposdePele, listarIngredientes} from '../repository/produtoRepository.js';
import { Router } from 'express';

const server = Router()

server.get('/produtos', async (req, resp) => {

  try {
    const resposta = await listarTodosProduto();
    resp.send(resposta);

  }

  catch (err) {

    resp.status(400).send({
      erro: err.message
  })
  }

})

server.post('/produto', async (req, resp) => {

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
    const dados = await deletarProduto(id);
    resp.send(dados)

  } 
  
  catch (err) {

    resp.status(404).send({erro: err.message});

  }
})

server.get('/produto/marcas', async (req, resp) => {
  try {
      const resposta = await listarMarcasProduto();
      resp.send(resposta);
  }
  catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})

server.get('/produto/necessidades', async (req, resp) => {
  try {
      const resposta = await listarNecessidades();
      resp.send(resposta);
  }
  catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})

server.get('/produto/tiposdepele', async (req, resp) => {
  try {
      const resposta = await listarTiposdePele();
      resp.send(resposta);
  }
  catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})

server.get('/produto/ingredientes', async (req, resp) => {
  try {
      const resposta = await listarIngredientes();
      resp.send(resposta);
  }
  catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})




export default server;