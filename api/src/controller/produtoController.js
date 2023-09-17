import { inserir, listarTodos, deletar } from  '../repository/produtoRepository.js';
import {Router} from 'express';
const server=  Router()





server.get(('/produto'), async (req, resp) => {
    try {
        const resposta = await listarTodos();
        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({erro:err.message})
    }
})


server.post(('/produto'), async (req, resp) =>{
  try {
    let x=req.body;
    let dados= await inserir (x) 
    resp.send(dados)
  } catch (error) {
    resp.status(404).send({erro:err.message})
  }
   
})

server.delete(('/produto/:id'), async (req,resp) => {
    try {
      let id = req.params.id;
      let x = await deletar(id);
      resp.send()
  
    } catch (err) {
      resp.status(404).send({erro:err.message})
    }
  })
  
  export default server;