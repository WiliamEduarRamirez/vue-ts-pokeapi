<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-end">
        <pokemon-pagination
          :loading="initialLoading"
          @change-page="changePage"
          :pagination="pagination"
        ></pokemon-pagination>
      </v-col>
    </v-row>
    <v-row>
      <template v-if="!initialLoading">
        <v-col v-for="(tempPokemon, index) in pokemons" :key="index" cols="4">
          <pokemon-card :temp-pokemon="tempPokemon"></pokemon-card>
        </v-col>
      </template>
      <v-col class="my-15" v-else>
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
import PokemonCard from "@/common/PokemonCard.vue";
import { Pagination, PaginationParams } from "@/models/pagination";
import PokemonPagination from "@/modules/pokemon/PokemonPagination.vue";
import { namespace } from "vuex-class";
const pokemon = namespace("pokemon");
@Component({
  components: { PokemonPagination, PokemonCard, CustomProgressCircular },
})
export default class PokemonList extends Vue {
  pokemons: Pokemon[] = [];
  pagination = new Pagination();
  initialLoading = true;
  loading = false;
  paginationParams = new PaginationParams(25);

  mounted(): void {
    this.listPokemon();
  }

  get axiosParams(): URLSearchParams {
    const params = new URLSearchParams();
    params.append("limit", this.paginationParams.limit.toString());
    params.append("offset", this.paginationParams.offset.toString());
    return params;
  }

  @pokemon.Getter
  getPokemons!: Pokemon[];

  @pokemon.Action
  loadFavoritesPokemons!: () => void;

  changePage(val: number): void {
    this.pagination.currentPage = val - 1;
    this.paginationParams.offset =
      this.paginationParams.limit * this.pagination.currentPage;
    this.listPokemon();
  }

  async listPokemon(): Promise<void> {
    this.initialLoading = true;
    try {
      this.loadFavoritesPokemons();
      const response = await pokemonServices.list(this.axiosParams);
      const arrPromises = response.results.map(async ({ url }) => {
        const tempPokemon = await pokemonServices.details(url);
        const exist = this.getPokemons.find((x) => x.id === tempPokemon.id);
        tempPokemon.favorite = !!exist;
        return tempPokemon;
      });
      this.pokemons = await Promise.all(arrPromises);
      this.pagination.itemsPerPage = this.paginationParams.limit;
      this.pagination.totalPages = Math.round(
        response.count / this.paginationParams.limit
      );
      this.pagination.totalItems = response.count;
    } catch (e) {
      console.log(e);
    } finally {
      this.initialLoading = false;
    }
  }
}
</script>

<style scoped></style>
