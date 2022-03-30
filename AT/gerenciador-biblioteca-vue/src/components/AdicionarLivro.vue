<template>
    <div class="m-4">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="titulo">Título</label>
                <input
                    type="text"
                    class="form-control"
                    id="titulo"
                    required
                    v-model="livro.titulo"
                    placeholder="Título do livro"
                />
            </div>
            <div class="form-group">
                <label for="autor">Autor</label>
                <input
                    type="text"
                    class="form-control"
                    id="autor"
                    required
                    v-model="livro.autor"
                    placeholder="Autor do livro"
                />
            </div>
            <div class="form-group">
                <label for="categoria">Categoria</label>
                <select v-model="livro.categoria" class="form-control">
                    <option disabled value>Selecione uma categoria</option>
                    <option>Romance</option>
                    <option>Drama</option>
                    <option>Suspense</option>
                </select>
            </div>
            <button @click="adicionar" class="btn btn-success">Adicionar</button>
        </div>
        <div v-else>
            <div class="alert alert-success">
                Livro adicionado com sucesso!
            </div>
        </div>
    </div>
</template>

<script>

import LivrosDataService from "../services/LivrosDataService";

export default {
    name: "adicionar-livro",
    data() {
        return {
            livro: {
                id: null,
                titulo: "",
                autor: "",
                categoria: ""
            },
            submitted: false
        };
    },
    methods: {
        adicionar() {
            let data = {
                titulo: this.livro.titulo,
                autor: this.livro.autor,
                categoria: this.livro.categoria,
                dataCadastro: new Date()
            };

            LivrosDataService.adicionar(this.livro)
                .then(response => {
                    this.livro.id = response.data.id;
                    this.submitted = true;
                })
                .catch(error => {
                    console.log(error);
                });
        },
    }
};

</script>