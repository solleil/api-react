import axios from 'axios';
import { api_url } from '../constats';
const api = axios.create({
    baseURL: api_url
});

export async function apagarEndereco(id) {
    const resposta = await api.delete(`/endereco/${id}`)

    return resposta.data;
}