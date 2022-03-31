<template>
    <div class="m-4">
        <div v-if="submitted">
            <div class="alert alert-success">
                Livro adicionado com sucesso!
            </div>
        </div>
        <div v-if="error">
            <div class="alert alert-danger">
                {{ errorMessage }}
            </div>
        </div>
        <div>
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
                <label for="sinopse">Sinopse</label>
                <textarea
                    type="text"
                    class="form-control"
                    id="sinopse"
                    required
                    v-model="livro.sinopse"
                    placeholder="Sinopse do livro"
                />
            </div>
            <button @click="adicionarSubmit" class="btn btn-success">Adicionar</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
    name: "adicionar-livro",
    data() {
        return {
            livro: {
                id: null,
                titulo: "",
                autor: "",
                categoria: "",
                dataCadastro: "",
                sinopse: ""
            },
            submitted: false,
            error: false,
            errorMessage: ""
        };
    },
    methods: {
        ...mapActions(["adicionar"]),
        adicionarSubmit() {
            if (this.validaEntradas()) {
                let data = {
                    id: uuidv4(),
                    titulo: this.livro.titulo,
                    autor: this.livro.autor,
                    categoria: this.livro.categoria,
                    dataCadastro: this.dataFormatada(new Date()),
                    sinopse: this.livro.sinopse
                };

                this.adicionar(data);
                this.submitted = true;      
            }
            else {
                this.error = true;
                this.errorMessage = "Preencha todos os campos!";
            }
                
        },
        dataFormatada(data){
            const dia  = data.getDate().toString().padStart(2, '0');
            const mes  = (data.getMonth()+1).toString().padStart(2, '0'); //+1 pois no getMonth Janeiro começa com zero.
            const ano  = data.getFullYear();

            return dia+"/"+mes+"/"+ano;
        },
        validaEntradas() {
            return this.livro.titulo && this.livro.autor && this.livro.categoria && this.livro.sinopse;
        }
    }
};

</script>