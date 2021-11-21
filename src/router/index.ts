import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Pokemon.vue"),
  },
  {
    path: "/:pokemonName/details",
    name: "pokemon-details",
    component: () => import("@/views/PokemonDetails.vue"),
  },
  {
    path: "/pokemon-favorites",
    name: "pokemon-favorites",
    component: () => import("@/views/PokemonFavorites.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
