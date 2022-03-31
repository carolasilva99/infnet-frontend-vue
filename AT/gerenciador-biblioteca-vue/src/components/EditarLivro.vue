<template>
    <div v-if="sucesso">
        <div class="alert alert-success">
            Livro atualizado com sucesso!
        </div>
    </div>
    <div v-if="error">
            <div class="alert alert-danger">
                {{ errorMessage }}
            </div>
        </div>
    <div v-if="livro" class="edit-form">
        <div class="form-group">
            <label for="id">Id</label>
            <input
                type="text"
                class="form-control"
                id="id"
                disabled
                v-model="livro.id"
            />
        </div>
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
        <div class="form-group">
            <label for="dataCadastro">Data de cadastro:</label>
            <input
                type="text"
                class="form-control"
                id="dataCadastro"
                disabled
                v-model="livro.dataCadastro"
            />
        </div>
        <button @click="atualizarSubmit" class="btn btn-success">Atualizar</button>
    </div>
    
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "editar",
    data() {
        return {
            sucesso: true,
            error: false,
            errorMessage: "",
        };
    },
    created() {
        this.sucesso = false;
        this.buscar(this.$route.params.id);
    },
    methods: {
        ...mapActions(["buscar", "atualizar"]),
        atualizarSubmit() {
            if (this.validaEntradas()) {
                this.atualizar(this.livro);
                this.sucesso = true;        
            }
            else {
                this.error = true;
                this.errorMessage = "Preencha todos os campos!";
            }   
        },
        validaEntradas() {
            return this.livro.titulo && this.livro.autor && this.livro.categoria;
        }
    },
    computed: {
        livro: {
            get() {
                return this.$store.state.livroAtual;
            },
            set(livro) {
                this.$store.commit("setLivro", livro);
            }
        },
    }
};

</script>