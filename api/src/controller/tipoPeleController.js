import { Router } from "express";
import { listarTipoPele } from "../repository/tipoPeleRepository.js";

const server = Router();

server.get('/tipopele', async(req, resp) =>{
    try {
        const resposta = await listarTipoPele()
        resp.send(resposta);
        
    } catch (err) {
        resp.status(404).send({

            erro: err.message
        })
    }


})


export default server;