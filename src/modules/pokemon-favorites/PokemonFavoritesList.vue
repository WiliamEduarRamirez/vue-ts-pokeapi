<template>
  <v-container>
    <template v-if="!initialLoading">
      <v-row>
        <v-col
          v-for="(tempPokemon, index) in getPokemons"
          :key="index"
          cols="4"
        >
          <pokemon-card :temp-pokemon="tempPokemon"></pokemon-card>
        </v-col>
      </v-row>
    </template>
    <v-col class="my-15" v-else>
      <custom-progress-circular></custom-progress-circular>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PokemonCard from "@/common/PokemonCard.vue";
import { namespace } from "vuex-class";
import { Pokemon } from "@/models/pokemon";
import CustomProgressCircular from "@/common/CustomProgressCircular.vue";
import sleep from "@/functions/sleep";
const pokemon = namespace("pokemon");

@Component({
  components: { CustomProgressCircular, PokemonCard },
})
export default class PokemonFavoritesList extends Vue {
  initialLoading = true;
  async created(): Promise<void> {
    this.initialLoading = true;
    await sleep(1000);
    this.loadFavoritesPokemons();
    this.initialLoading = false;
  }

  @pokemon.Getter
  getPokemons!: Pokemon[];

  @pokemon.Action
  loadFavoritesPokemons!: () => void;
}
</script>

<style scoped></style>
