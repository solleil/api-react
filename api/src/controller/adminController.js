import { Router } from 'express';
import { alterarAdmin, deletarAdmin, inserirAdmin, listarAdmin, loginAdmin } from '../repository/adminRepository.js';
const server = Router()

server.get(('/admin'), async (req, resp) => {
    try {
        const resposta = await listarAdmin();
        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({ erro: err.message })
    }
})


server.post(('/admin'), async (req, resp) => {
    try {
        let x = req.body;
        let dados = await inserirAdmin(x)
        resp.send(dados)
    } catch (err) {
        resp.status(404).send({ erro: err.message })
    }

})

server.post(('/admin/login'), async (req, resp) => {
    try {
        let x = req.body;
        let dados = await loginAdmin(x)
        resp.send(dados)
    } catch (err) {
        resp.status(404).send({ erro: err.message })
    }

});

server.put('/admin/alterar', async (req,resp) =>{
    
    try {
        const usuarioAlterado = req.body;
        const {respo} = await alterarAdmin(usuarioAlterado);
        resp.send(respo);
    } catch (err) {
        resp.status(500).send({erro:err.message});
    }
})

server.delete(('/admin/:id'), async (req, resp) => {
    try {
        let id = req.params.id;
        let x = await deletarAdmin(id);
        
        resp.send()

    } catch (err) {
        resp.status(404).send({ erro: err.message })
    }
})

export default server;