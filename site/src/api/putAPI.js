import axios from 'axios';
import { api_url } from '../constats';
const api = axios.create({
    baseURL: api_url
});

export async function editarUsuario(nome, sobrenome, telefone, email, cpf, id) {
    const resp = await api.put(`/cliente/alterar/${id}`, {
        nome: nome,
        sobrenome: sobrenome,
        telefone: telefone,
        email: email,
        cpf: cpf
    })

    return resp.data;
}

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
export async function editarProduto(nomeProduto, ingrediente, descri, precoProduto, tipopele, estoque, tamanho, qtd, idMarca, necess, ingre_atv, indica, categoria, id) {
    const resposta = await api.put(`/alterar/produto`, {
        nome: nomeProduto,
        descricao: descri,
        tamanho: tamanho,
        indicacao: indica,
        preco: precoProduto,
        disponivel: estoque,
        ingrediente: ingrediente,
        estoque: qtd,
        tipo_pele: tipopele,
        categoria: categoria,
        ingrediente_atv: ingre_atv,
        marca: idMarca,
        necessidade: necess,
        id: id
    });

    return resposta.data;
};

export async function enviarImagem(id, imagem) {
    const formData = new FormData();
    formData.append('foto_produto', imagem)
    const respo = await api.put(`/imagem/produto/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    })

    return respo.status;
}
