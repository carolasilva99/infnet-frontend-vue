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
        localStorage.setItem('livros', JSON.stringify(this.listar().map(l => l.id == id ? l = livro : l)));
        return livro;
    }
    excluir(id) {
        return localStorage.setItem('livros', JSON.stringify(this.listar().filter(livro => livro.id != id)));
    }
}
export default new LivrosDataService();