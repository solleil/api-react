
import axios from 'axios';
//import { URL_API } from "../constats.js";

const api = axios.create({
    baseURL: 'http://localhost:5000'
});


export async function login(email, senha){
    const r = await api.post('/cliente/login', {
        EMAIL: email,
        SENHA: senha

      }); 

      console.log(r.data);
      return r.data

};


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
