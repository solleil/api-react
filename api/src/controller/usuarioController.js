import { Router } from 'express';
import { listarTodosUsuario, inserirUsuario, deletarUsuario, alterarUsuario, loginUsuario } from '../repository/usuarioRepository.js';

const server = Router()

server.get(('/cliente'), async (req, resp) => {

    try {
        const respo = await listarTodosUsuario();
        resp.send(respo);
    } 
    
    catch (err) {

        resp.status(404).send({ erro: err.message })

    }
})
server.post(('/cliente'), async (req, resp) => {

    try {

        let respo = req.body;
        let dados = await inserirUsuario(respo)
        resp.send(dados)

    } 

    catch (err) {

        resp.status(404).send({ erro: err.message })

    }

})

server.post(('/login'), async (req, resp) => {

    try {
        
        const respo = req.body;
        const dados = await loginUsuario(respo);
        resp.send(dados)
    } 
    
    catch (err) {
        
        resp.status(404).send({ erro: err.message })

    }

});

server.put('/alterar/cliente', async (req,resp) =>{
    
    try {

        const respo = req.body;
        const {dados} = await alterarUsuario(respo);
        resp.send(dados);

    } 
    
    catch (err) {

        resp.status(404).send({erro: err.message});

    }

})

server.delete(('/cliente/:id'), async (req, resp) => {

    try {

        const id = req.params.id;
        const {dados} = await deletarUsuario(id);
        resp.send(dados)

    } 
    
    catch (err) {

        resp.status(404).send({ erro: err.message })

    }

})

export default server;