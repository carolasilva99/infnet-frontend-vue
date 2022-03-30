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
        <button @click="atualizar(livro.id, livro)" class="btn btn-success">Atualizar</button>
    </div>
    
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "editar",
    created() {
        this.sucesso = false;
        console.log(this.buscar(this.$route.params.id));
    },
    methods: {
        ...mapActions(["buscar", "atualizar"])
    },
    computed: {
        ...mapGetters(["livro"])
    }
};

</script>