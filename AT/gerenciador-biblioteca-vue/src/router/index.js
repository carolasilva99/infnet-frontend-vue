import { createRouter, createWebHistory } from "vue-router";
import ListagemLivros from "../components/ListagemLivros.vue";
import EditarLivro from "../components/EditarLivro.vue";
import AdicionarLivro from "../components/AdicionarLivro.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/livros",
      name: "livros",
      component: () => ListagemLivros,
    },
    {
      path: "/livros/:id",
      name: "editar",
      component: () => EditarLivro,
    },
    {
      path: "/adicionar",
      name: "adicionar",
      component: () => AdicionarLivro,
    },
  ],
});

export default router;
