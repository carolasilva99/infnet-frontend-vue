class LivrosDataService {
    listar() {
        return localStorage.getItem('livros') ? JSON.parse(localStorage.getItem('livros')) : [];
    }
    buscar(id) {
        return localStorage.getItem('livros') ? JSON.parse(localStorage.getItem('livros')).find(livro => livro.id == id) : null;
    }
    adicionar(livro) {
        return localStorage.setItem('livros', JSON.stringify([...this.listar(), livro]));
    }
    atualizar(id, livro) {
        return localStorage.setItem('livros', JSON.stringify(this.listar().map(livro => livro.id == id ? livro = livro : livro)));
    }
    excluir(id) {
        return localStorage.setItem('livros', JSON.stringify(this.listar().filter(livro => livro.id != id)));
    }
}
export default new LivrosDataService();