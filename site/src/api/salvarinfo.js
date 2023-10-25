import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function salvarInfos(nomeProduto, descri, tamanho, idMarca, necess, tipopele, precoProduto, estoque, ingre_atv, indica) {
    const resposta = await api.post('/produto', {
        nome: nomeProduto,
        desc: descri,
        tamanho: tamanho,
        marca: idMarca,
        necessidade: necess,
        tipodepele: tipopele,
        preco: precoProduto,
        estoque: estoque,
        ingrativo: ingre_atv,
        indicacoes: indica
    });

    return resposta.data
}

export async function listarMarcas() {
    const r = await api.get('/marca');
    return r.data;
    console.log(r.response.data);
}

export async function listarNecessidades() {
    const r = await api.get('/necessidades');
    return r.data;
    console.log(r.response.data);
}

export async function listarTiposdePele() {
    const r = await api.get('/tipopele');
    return r.data;
}

export async function listarIngredientes() {
    const r = await api.get('/ingredienteAtivo');
    return r.data;
}