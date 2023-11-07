import axios from 'axios';
import { api_url } from '../constats';
const api = axios.create({
    baseURL: api_url
});

export async function CadastrarUsuario(nome, sobrenome, telefone, email, cpf, data, senha) {
    const resposta = await api.post('/cliente', {
        nome: nome,
        sobrenome: sobrenome,
        telefone: telefone,
        email: email,
        cpf: cpf,
        nasc: data,
        senha: senha

    });

    return resposta.data;
    console.log(resposta.data);
}

export async function AdicionarProduto(nomeProduto, ingrediente, descri, precoProduto, tipopele, estoque, tamanho, qtd, idMarca, necess, ingre_atv, indica, categoria) {
    const resposta = await api.post('/produto/inserir', {
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
        necessidade: necess
    });

    return resposta.data;
};



export async function logarUsuario(email, senha) {
    const resposta = await api.post('/login/cliente', {
        email:email,
        senha:senha
    });

    return resposta.data;
};

export async function logarAdmin(email, senha) {
    const resposta = await api.post('/login/admin', {
        email: email,
        senha: senha
    });

    return resposta.data;
}
