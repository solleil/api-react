import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function salvarInfos(nomeProduto, descri, tipopele, precoProduto , estoque, tamanho, marca, necess, ingre_atv){
    const resposta = await api.post('http://localhost:5000/produto', {

    nome: nomeProduto,
    desc: descri,
    tamanho: tamanho,
    marca: marca,
    necessidade: necess,
    tipodepele: tipopele,
    preco: precoProduto,
    estoque: estoque,
    ingrativo: ingre_atv

    })
}