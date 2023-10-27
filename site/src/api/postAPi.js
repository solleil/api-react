import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function AdicionarProdutos(nomeProduto, descri, tamanho,  idMarca, necess, tipopele, precoProduto, estoque,  ingre_atv, indica) {
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