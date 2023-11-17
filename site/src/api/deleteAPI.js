import axios from 'axios';
import { api_url } from '../constats';
const api = axios.create({
    baseURL: api_url
});

export async function apagarEndereco(id) {
    const resposta = await api.delete(`/endereco/${id}`)

    return resposta.data;
}

export async function apagarCartao(id) {
    const resposta = await api.delete(`/cartao/${id}`)

    return resposta.data;
}

export async function deletarProduto(id) {
    await api.delete(`/produto/${id}`)
}


export async function deletarUsuario(id) {
    const resp = await api.delete(`/cliente/${id}`)

    return resp.data;
}