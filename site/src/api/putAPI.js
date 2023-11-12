import axios from 'axios';
import { api_url } from '../constats';
const api = axios.create({
    baseURL: api_url
});

export async function editarEndereco(rua, numero, bairro, cidade, cep, id) {
    const resposta = await api.put(`/endereco/${id}`, {
        cep: cep,
        rua: rua,
        numero: numero,
        cidade: cidade,
        bairro: bairro
    })

    return resposta.data;
}

