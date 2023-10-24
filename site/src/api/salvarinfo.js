import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function salvarInfos(nomeProduto, descri, tamanho, idMarca, necess, tipopele, precoProduto, estoque, ingre_atv){
    const resposta = await api.post('/produto', {

    nome: nomeProduto,
    desc: descri,
    tamanho: tamanho,
    marca: idMarca,
    necessidade: necess,
    tipodepele: tipopele,
    preco: precoProduto,
    estoque: estoque,
    ingrativo: ingre_atv

    });

    return resposta.data
}

export async function listarMarcas() {
    const r = await api.get('/produto/marcas');
    return r.data;
}

export async function listarNecessidades() {
    const r = await api.get('/produto/necessidades');
    return r.data;
}

export async function listarTiposdePele() {
    const r = await api.get('/tipopele');
    return r.data;
}

export async function listarIngredientes() {
    const r = await api.get('/produto/ingredientes');
    return r.data;
}