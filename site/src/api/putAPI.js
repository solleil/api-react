import axios from 'axios';
import { api_url } from '../constats';
const api = axios.create({
    baseURL: api_url
});

export async function editarEndereco(rua, numero, bairro, cidade, cep, id) {
    const resposta = await api.post('/endereco', {
        cep: cep,
        rua: rua,
        numero: numero,
        cidade: cidade,
        bairro: bairro,
        cliente: id
    })

    return resposta.data;
}

