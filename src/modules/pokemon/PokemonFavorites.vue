<template>
  <div
    :class="[
      !this.$vuetify.breakpoint.smAndDown ? 'justify-end' : 'justify-center',
      !this.$vuetify.breakpoint.smAndDown ? 'mt-5' : 'mt-n7',
    ]"
    class="d-flex"
  >
    <v-btn @click="redirectPokemonFavorites" small color="success">
      Mis pokemones favoritos
      <v-icon right>mdi-heart</v-icon>
    </v-btn>
    <div class="ml-4 mt-1">{{ getTotal || 0 }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { namespace } from "vuex-class";
const pokemon = namespace("pokemon");

@Component
export default class PokemonFavorites extends Vue {
  @pokemon.Getter
  getTotal!: number | null;

  redirectPokemonFavorites(): void {
    this.$router.push({ path: "/pokemon-favorites" });
  }
}
</script>

<style scoped></style>
