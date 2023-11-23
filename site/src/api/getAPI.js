import axios from 'axios';
import { api_url } from '../constats';
const api = axios.create({
    baseURL: api_url
});

export async function listarProdutos() {
    const r = await api.get('/produto');
    return r.data;
}

export async function listarProdutosInner() {
    const r = await api.get('/produtos/inner');
    return r.data
}

export async function listarProdutosId(id) {
    const r = await api.get(`/produto/${id}`);
    return r.data;
}

export async function listarProdutosFiltro(queryIDT) {
    const r = await api.get(`/produto/filtro?${queryIDT}`);
    return r.data;
}

export async function listarProdutosConsulta(queryFiltro) {
    const r = await api.get(`/produto/consulta?${queryFiltro}`);
    return r.data;
}

export async function PesquisarProduto(nome) {
    const r = await api.get()
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

export async function listarEndereco(id) {
    const r = await api.get(`/endereco/${id}`);
    return r.data;
}


export async function listarUsuario(id) {
    const r = await api.get(`/cliente/${id}`);
    return r.data;
}

export async function listarCartao(id) {
    const r = await api.get(`/cartao/${id}`)
    return r.data
}

export async function listarAdminId(id) {
    const r = await api.get(`/admin/${id}`);
    return r.data;
}


export function MostrarImagem(imagem) {

    return `${api_url}/${imagem}`;

}

export async function buscaProduto(nome) {
    const resposta = await api.get(`/produto/busca?nome=${nome}`)
    return resposta.data
}

export async function listarPedidopPorID(id) {
    const resp = await api.get(`/pedidos/${id}`)
    return resp.data;
}