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
                                            <button class="btn btn-danger" @click="excluir(livro.id)">Excluir</button>
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
import { mapGetters, mapActions } from "vuex";

export default {
    name: "listagem-livros",
    created() {
        this.listar();
    },
    methods: {
        ...mapActions(["listar", "excluir"]),
        editar(livro) {
            this.$router.push({
                name: "editar",
                params: {
                    id: livro.id
                }
            });
        }
    },
    computed: {
        ...mapGetters(["livros"])
    }
};

</script>