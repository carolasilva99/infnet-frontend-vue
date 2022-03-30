import Vuex from 'vuex';
import Vue from 'vue';
import LivrosDataService from "../services/LivrosDataService";

Vue.useAttrs(Vuex);

const store = createStore({
    state: {
        livros: []
    },
    actions: {
        async listar({ commit }) {
            const response = await LivrosDataService.listar();
    
            commit("setLivros", response.data);    
        }
    },
    getters: {
        livros: state => state.livros
    },
    mutations: {
        setLivros: (state, livros) => (state.livros = livros)
    }
})

export default store;