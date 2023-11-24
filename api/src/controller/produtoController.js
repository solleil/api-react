import { inserirProduto, listarTodosProduto, deletarProduto, alterarProduto, pesquisarProduto, mostrarProdutosId, inserirImagemProduto, buscaProdutoFiltro, filtroProdutoID, favoritarProduto, listarProdutosFav } from '../repository/produtoRepository.js';
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

server.get(('/produto/fav'), async (req, resp) => {
  try {
    const respo = await listarProdutosFav();
    resp.send(respo);
  } catch (err) {
    resp.status(404).send({erro: err.message});
  }
})

server.get(('/produto/consulta'), async (req, resp) => {
  try {
    const qId = req.query.nome;
    const qNm = req.query.id;
    const respo = await buscaProdutoFiltro(qId, qNm);
    if (respo.length == 0 ) {
      throw new Error('produto inexistente')
    }
    resp.send(respo);
  } catch (err) {
    resp.status(404).send({ erro: err.message })
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
    resp.status(404).send({ erro: err.message })
  }
})

server.get(('/produtos/inner'), async (req, resp) => {
  try {
    const respo = await listarProdutosInner();
    resp.send(respo)
  } catch (err) {
    resp.status(404).send({ erro: err.message })
  }
})

server.get(('/produto/:id'), async (req, resp) => {
  try {
    const params = req.params.id;
    const respo = await mostrarProdutosId(params);
    resp.send(respo)
  } catch (err) {
    resp.status(404).send({ erro: err.message });
  }
})

server.get(('/produto/carrinho/:id'), async (req, resp) => {
  try {
    const id = Number(req.params.id);

    const resposta = await mostrarProdutosId(id);
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
    if (!body.nome) {
      throw new Error('O Nome é obrigatório.');
    };
    if (!body.descricao) {
      throw new Error('A Descrição é obrigatória.');
    };
    if (!body.tamanho) {
      throw new Error('O Tamanho é obrigatório.');
    };
    if (!body.indicacao) {
      throw new Error('A Indicação é obrigatória.');
    };
    if (!body.preco) {
      throw new Error('Indicar um Preço é obrigatório.')
    };
    if (!body.disponivel) {
      throw new Error('Dizer a Disponibilidade é obrigatório.');
    };
    if (!body.ingrediente) {
      throw new Error('Pôr os Ingredientes é obrigatório.');
    };
    if (!body.estoque) {
      throw new Error('A Quantidade no Estoque é obrigatório.');
    };
    if (!body.tipo_pele) {
      throw new Error('Pôr o Tipo de Pele é obrigatório.');
    };
    if (!body.categoria) {
      throw new Error('Pôr a Categoria é obrigatório.');
    };
    if (!body.ingrediente_atv) {
      throw new Error('Pôr o ingrediente Ativo é obrigatório.');
    };
    if(!body.marca) {
      throw new Error('Dizer qual a Marca é obrigatório.');
    };
    if (!body.necessidade) {
      throw new Error('Pôr qual a Necessidade é obrigatório.');
    };
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

server.put(('/produto/favorito/:id'), async (req, resp) => {
  try {
    const queryf = req.query.fav;
    const params = req.params.id;
    const respo = await favoritarProduto(queryf, params);
    resp.sendStatus(204);
  } catch (err) {
    resp.status(400).send({erro: err.message});
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