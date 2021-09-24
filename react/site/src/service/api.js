import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030/'
})

export default class Api {
    async listar() {
        let r = await api.get('/prudto');
        return r.data;
    }
    async inserir(nome, chamada, curso, turma) {
        let r = await api.post('/produto', {nome, chamada, curso, turma} );
        return r.data;
    }
    async alterar(id, nome, chamada, curso, turma) {
        let r = await api.put('/produto' + id, { nome, chamada, curso, turma });
        return r.data;
    }
    async remover(id) {
        let r = await api.delete('/produto/' + id);
        return r.data;
    }
}