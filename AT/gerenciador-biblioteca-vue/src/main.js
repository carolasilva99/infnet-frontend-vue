import { createApp } from "vue";
import { createStore } from 'vuex';
import App from "./App.vue";
import router from "./router";
import LivrosDataService from "./services/LivrosDataServiceLocalStorage";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

const store = createStore({
    state: {
        livros: [],
        livroAtual: null,
    },
    actions: {
        async listar({ commit }) {
            const response = await LivrosDataService.listar();
            commit("listar", response);    
        },
        async excluir({ commit }, id) {
            LivrosDataService.excluir(id);
            commit("excluir", id);
        },
        async atualizar({ commit }, livro) {
            const response = LivrosDataService.atualizar(livro.id, livro);
            commit("atualizar", response);
        },
        async adicionar({ commit }, livro) {
            const response = LivrosDataService.adicionar(livro);
            commit("adicionar", response);
        },
        async buscar({ commit }, id) {
            const response = await LivrosDataService.buscar(id);
            commit("buscar", response);
        }
    },
    getters: {
        livros: state => state.livros,
        livro: state => state.livroAtual
    },
    mutations: {
        listar: (state, livros) => (state.livros = livros),
        excluir: (state, id) => state.livros = state.livros.filter(livro => livro.id !== id),
        adicionar: (state, livro) => state.livros.push(livro),
        buscar: (state, livro) => (state.livroAtual = livro),
        atualizar: (state, livro) => {
            const index = state.livros.findIndex(l => l.id === livro.id);
            state.livros.splice(index, 1, livro);
        }
    }
})

app.use(router);
app.use(store);

app.mount("#app");
