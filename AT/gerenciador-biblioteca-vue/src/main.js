import { createApp } from "vue";
import { createStore } from 'vuex';
import App from "./App.vue";
import router from "./router";
import LivrosDataService from "./services/LivrosDataService";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

const store = createStore({
    state: {
        livros: []
    },
    actions: {
        async listar({ commit }) {
            const response = await LivrosDataService.listar();
    
            commit("setLivros", response.data);    
        },
        async excluir({ commit }, id) {
            await LivrosDataService.excluir(id);
            commit("excluir", id);
        },
        async atualizar({ commit }, livro) {
            const response = await LivrosDataService.atualizar(livro.id, livro);
            commit("atualizar", response.data);
        },
        async adicionar({ commit }, livro) {
            const response = await LivrosDataService.adicionar(livro);
            commit("adicionar", response.data);
        },
        async buscar({ commit }, id) {
            const response = await LivrosDataService.buscar(id);
            commit("buscar", response.data);
        }
    },
    getters: {
        livros: state => state.livros,
        livro: state => id => state.livros.find(livro => livro.id === id)
    },
    mutations: {
        setLivros: (state, livros) => (state.livros = livros),
        excluir: (state, id) => state.livros = state.livros.filter(livro => livro.id !== id),
        atualizar: (state, livro) => {
            const index = state.livros.findIndex(l => l.id === livro.id);
            state.livros.splice(index, 1, livro);
        },
        adicionar: (state, livro) => state.livros.push(livro),
        buscar: (state, livro) => (state.livros = [livro])
    }
})

app.use(router);
app.use(store);

app.mount("#app");
