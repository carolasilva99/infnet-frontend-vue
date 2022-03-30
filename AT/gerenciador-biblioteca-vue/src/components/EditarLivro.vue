<template>
    <div v-if="sucesso">
        <div class="alert alert-success">
            Livro atualizado com sucesso!
        </div>
    </div>
    <div v-if="livro" class="edit-form">
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
                <option value="ROMANCE">Romance</option>
                <option value="DRAMA">Drama</option>
                <option value="SUSPENSE">Suspense</option>
            </select>
        </div>
        <button @click="atualizar" class="btn btn-success">Atualizar</button>
    </div>
    
</template>
<script>
import LivrosDataService from "../services/LivrosDataService";

export default {
    name: "editar",
    data() {
        return {
            livro: null,
            sucesso: false
        };
    },
    methods: {
        buscar(id) {
            LivrosDataService.buscar(id)
                .then(response => {
                    this.livro = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        atualizar() {
            LivrosDataService.atualizar(this.livro.id, this.livro)
                .then(response => {
                    this.sucesso = true;
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.sucesso = false;
        this.buscar(this.$route.params.id);
    }
};

</script>