<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <pokemon-search></pokemon-search>
      </v-col>
      <v-col cols="6">
        <pokemon-favorites></pokemon-favorites>
      </v-col>
    </v-row>
    <v-row>
      <PokemonList></PokemonList>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PokemonList from "@/modules/pokemon/PokemonList.vue";
import PokemonSearch from "@/modules/pokemon/PokemonSearch.vue";
import PokemonFavorites from "@/modules/pokemon/PokemonFavorites.vue";

@Component({
  components: { PokemonFavorites, PokemonSearch, PokemonList },
})
export default class Pokemon extends Vue {}
</script>

<style scoped></style>
