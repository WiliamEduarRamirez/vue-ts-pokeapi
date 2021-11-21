import Vue from "vue";
import Vuex from "vuex";
import PokemonModule from "@/store/modules/pokemon";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    pokemon: PokemonModule,
  },
});
