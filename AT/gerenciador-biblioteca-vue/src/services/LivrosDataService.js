import http from "../http-common";

class LivrosDataService {
    listar() {
        return http.get("/livros");
    }
    buscar(id) {
        return http.get(`/livros/${id}`);
    }
    criar(livro) {
        return http.post("/livros", livro);
    }
    atualizar(id, livro) {
        return http.put(`/livros/${id}`, livro);
    }
    deletar(id) {
        return http.delete(`/livros/${id}`);
    }
    deletarTodos() {
        return http.delete(`/livros`);
    }
}
export default new LivrosDataService();