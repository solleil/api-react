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


// atualizar
server.post(('/admin'), async (req, resp) => {
    try {
        const body = req.body;
        const respo = await inserirAdmin(body)
        resp.send(respo)
    } catch (err) {
        resp.status(404).send({ erro: err.message })
    }

})

server.post(('/login/admin'), async (req, resp) => {
    try {
        const body = req.body;
        const respo = await loginAdmin(body)
        if (!respo) {
            throw new Error('Email ou Senhas incorretos');
        }
        resp.send(respo)
    } catch (err) {
        resp.status(401).send({ erro: err.message })
    }

});

// atualizar
server.put('/admin/alterar', async (req,resp) =>{
    try {
        const usuarioAlterado = req.body;
        const respo = await alterarAdmin(usuarioAlterado);
        resp.send(respo);
    } catch (err) {
        resp.status(500).send({erro:err.message});
    }
})

// atualizar
server.delete(('/admin/:id'), async (req, resp) => {
    try {
        const params = req.params.id;
        const respo = await deletarAdmin(params);
        resp.send(respo)

    } catch (err) {
        resp.status(404).send({ erro: err.message })
    }
})

export default server;