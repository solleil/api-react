import { inserirProduto, listarTodosProduto, deletarProduto, alterarProduto, pesquisarProduto, mostrarProdutosId, inserirImagemProduto, listarProdutosInner, buscaProdutoFiltro, filtroProdutoID, buscaProduto } from '../repository/produtoRepository.js';
import { Router } from 'express';

import multer from 'multer';
const upload = multer({ dest: 'storage/fotos_gerais_produtos' });

const server = Router()


server.get(('/produto/busca'), async (req, resp) => {
  try {
      const {nome} = req.query;
      const resposta = await buscaProduto(nome);
      console.log(nome);

      resp.send(resposta)
  } catch (err) {
    resp.status(404).send({erro: err.message})
  }
}  )

server.get(('/produto'), async (req, resp) => {
  try {
    const resposta = await listarTodosProduto();
    resp.send(resposta);
  }
  catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

server.get(('/produto/consulta'), async (req, resp) => {
  try {
    const body = req.body;
    const respo = await buscaProdutoFiltro(body);
    resp.send(respo);
  } catch (err) {
    resp.status(404).send({erro: err.message})
  }
})

server.get(('/produto/filtro'), async (req, resp) => {
  try {
    const queryC = req.query.categoria;
    const queryM = req.query.marca;
    const queryN = req.query.necess;
    const queryT = req.query.tipopele;
    const respo = await filtroProdutoID(queryC, queryM, queryN, queryT)
    resp.send(respo);
  } catch (err) {
    resp.status(404).send({erro: err.message})
  }
})

server.get(('/produtos/inner'), async (req, resp) => {
  try {
    const respo = await listarProdutosInner();
    resp.send(respo)
  } catch (err) {
    resp.status(404).send({erro: err.message})
  }
})

server.get(('/produto/:id'), async (req, resp) => {
  try {
    const id = Number(req.params.id);

    const resposta= await mostrarProdutosId(id);
    resp.send({
      info: resposta
    });
  } catch (err) {
    resp.status(404).send({
      erro: err.message
    })
  }

})

server.get(('/pesquisa/produto'), async (req, resp) => {
  try {
    const query = req.query.nome;
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
    resp.status(201).send(dados)
  }
  catch (err) {
    resp.status(400).send({ erro: err.message });
  }
})

server.put('/alterar/produto', async (req, resp) => {
  try {
    const body = req.body;
    await alterarProduto(body);
    resp.sendStatus(204);
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