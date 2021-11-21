<template>
  <v-container>
    <v-row>
      <pokemon-search></pokemon-search>
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
@Component({
  components: { PokemonSearch, PokemonList },
})
export default class Pokemon extends Vue {}
</script>

<style scoped></style>
