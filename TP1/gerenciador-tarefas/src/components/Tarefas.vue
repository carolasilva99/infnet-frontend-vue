<script>
export default {
    data() {
        return {
            tarefas: [
                {nome_id:"teste", id: 1, descricao: "Tarefa 1", esta_completa: false },
                {nome_id:"teste", id: 2, descricao: "Tarefa 2", esta_completa: false },
                {nome_id:"teste", id: 3, descricao: "Tarefa 3", esta_completa: true },
                {nome_id:"teste", id: 4, descricao: "Tarefa 4", esta_completa: false },
                {nome_id:"teste", id: 5, descricao: "Tarefa 5", esta_completa: true },
            ]
        }
    },
    methods() {
        return {
            colorirTarefa(tarefa) {
                tarefa.esta_completa ? 'green' : 'red';
            }
        }
    }
}
</script>

<template>
    <table>
        <tr>
            <th>Id</th>
            <th>Descrição</th>
            <th>Completa</th>
        </tr>
        <template v-for="tarefa in tarefas" :key="tarefa.id">
            <tr :class="tarefa.esta_completa ? 'tarefaCompleta' : 'tarefaIncompleta'">
                <td>{{ tarefa.id }}</td>
                <td>{{ tarefa.descricao }}</td>
                <td>{{ tarefa.esta_completa ? 'Sim' : 'Não' }}</td>
            </tr>
        </template>
    </table>
</template>

<style>
    table {
    border-collapse: collapse;
    width: 100%;
    }

    th, td {
    text-align: left;
    padding: 8px;
    }

    .tarefaCompleta {
        background-color: rgb(174, 223, 174);
    }

    .tarefaIncompleta {
        background-color: rgb(238, 153, 153);
    }
</style>