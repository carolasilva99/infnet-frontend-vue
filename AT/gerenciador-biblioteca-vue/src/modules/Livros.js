import LivrosDataService from "../services/LivrosDataService";

const state = {
    livros: []
};

const getters = {
    livros: state => state.livros
};

const actions = {
    async listar({ commit }) {
        const response = await LivrosDataService.listar();

        commit("setLivros", response.data);    
    }
};

const mutations = {
    setLivros: (state, livros) => (state.livros = livros)
}

export default {
    state,
    getters,
    actions,
    mutations
}