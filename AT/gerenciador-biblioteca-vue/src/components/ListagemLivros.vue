<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Listagem de Livros</h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead class=" text-primary">
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Título
                                    </th>
                                    <th>
                                        Autor
                                    </th>
                                    <th>
                                        Categoria
                                    </th>
                                    <th>
                                        Data de Cadastro
                                    </th>
                                </thead>
                                <tbody>
                                    <tr v-for="livro in livros" :key="livro.id">
                                        <td>
                                            {{ livro.id }}
                                        </td>
                                        <td>
                                            {{ livro.titulo }}
                                        </td>
                                        <td>
                                            {{ livro.autor }}
                                        </td>
                                        <td>
                                            {{ livro.categoria }}
                                        </td>
                                        <td>
                                            {{ livro.dataCadastro }}
                                        </td>
                                        <td>
                                            <button class="btn btn-success mr-3" @click="editar(livro)">Editar</button>
                                            <button class="btn btn-danger" @click="excluir(livro)">Excluir</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LivrosDataService from "../services/LivrosDataService";

export default {
    name: "listagem-livros",
    data() {
        return {
            livros: []
        };
    },
    created() {
        LivrosDataService.listar()
            .then(response => {
                this.livros = response.data;
            });
    },
    methods: {
        editar(livro) {
            this.$router.push({
                name: "editar",
                params: {
                    id: livro.id
                }
            });
        },
        excluir(livro) {
            LivrosDataService.excluir(livro.id)
                .then(response => {
                    this.livros = this.livros.filter(l => l.id !== livro.id);
                });
        }
    }
};

</script>