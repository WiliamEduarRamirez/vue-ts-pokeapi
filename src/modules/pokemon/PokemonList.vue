<template>
  <v-container>
    <v-row>
      <template v-if="!initialLoading">
        <v-col v-for="(tempPokemon, index) in pokemons" :key="index" cols="4">
          <pokemon-card :temp-pokemon="tempPokemon"></pokemon-card>
        </v-col>
      </template>
      <v-col v-else>
        <custom-progress-circular></custom-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import pokemonServices from "@/services/pokemon-services";
import { Pokemon } from "@/models/pokemon";
import CustomProgressCircular from "@/common/CustomProgressCircular.vue";
import PokemonCard from "@/modules/pokemon/PokemonCard.vue";
import { PaginationParams } from "@/models/pagination";
@Component({
  components: { PokemonCard, CustomProgressCircular },
})
export default class PokemonList extends Vue {
  pokemons: Pokemon[] = [];
  initialLoading = false;
  paginationParams = new PaginationParams();

  mounted(): void {
    this.listPokemon();
  }

  get axiosParams(): URLSearchParams {
    const params = new URLSearchParams();
    params.append("limit", this.paginationParams.limit.toString());
    params.append("offset", this.paginationParams.offset.toString());
    return params;
  }

  async listPokemon(): Promise<void> {
    this.initialLoading = true;
    try {
      const response = await pokemonServices.list(this.axiosParams);
      const arrPromises = response.results.map(
        async ({ url }) => await pokemonServices.details(url)
      );
      this.pokemons = await Promise.all(arrPromises);
    } catch (e) {
      console.log(e);
    } finally {
      this.initialLoading = false;
    }
  }
}
</script>

<style scoped></style>
