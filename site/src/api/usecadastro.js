
import axios from 'axios';
//import { URL_API } from "../constats.js";

const api = axios.create({
    baseURL: 'http://localhost:5000'
});



export async function cadastro (nome, sobrenome,  telefone, email, cpf, nasc, senha) {
    const resposta = await api.post('/cliente', {

        nome: nome,
        sobrenome: sobrenome,
        telefone: telefone,
        email: email,
        cpf: cpf,
        nasc: nasc,
        senha: senha
    })

}
