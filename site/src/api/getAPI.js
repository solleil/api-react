import axios from 'axios';
import { api_url } from '../constats';
const api = axios.create({
    baseURL: api_url
});

export async function listarProdutos() {
    const r = await api.get('/produto');
    return r.data;
}

export async function listarMarcas() {
    const r = await api.get('/marca');
    return r.data;
}

export async function listarNecessidades() {
    const r = await api.get('/necessidades');
    return r.data;
}

export async function listarTiposdePele() {
    const r = await api.get('/tipopele');
    return r.data;
}

export async function listarIngredientes() {
    const r = await api.get('/ingredienteAtivo');
    return r.data;
}

export async function listarCategorias() {
    const r = await api.get('/categoria');
    return r.data;
}