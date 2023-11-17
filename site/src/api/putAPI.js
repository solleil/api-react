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
