import http from "../http-common";

class LivrosDataService {
    listar() {
        return http.get("/livros");
    }
    buscar(id) {
        return http.get(`/livros/${id}`);
    }
    adicionar(livro) {
        return http.post("/livros", livro);
    }
    atualizar(id, livro) {
        return http.put(`/livros/${id}`, livro);
    }
    excluir(id) {
        return http.delete(`/livros/${id}`);
    }
}
export default new LivrosDataService();