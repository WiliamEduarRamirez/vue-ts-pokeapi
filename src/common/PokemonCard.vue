<template>
  <v-card v-if="tempPokemon" class="mx-auto" max-width="344">
    <v-img
      :src="tempPokemon.sprites.front_default"
      contain
      height="200px"
    ></v-img>
    <v-divider></v-divider>
    <v-card-title> {{ tempPokemon.name }} </v-card-title>
    <v-card-subtitle> Pokemon </v-card-subtitle>
    <v-divider></v-divider>
    <v-card-actions>
      <div style="width: 100%" class="d-flex justify-space-between">
        <div></div>
        <v-btn color="primary" small>
          Ver mas
          <v-icon right> mdi-arrow-right-thick </v-icon>
        </v-btn>
        <v-btn
          v-if="$route.name !== 'pokemon-favorites'"
          @click="handleFavoritePokemon"
          icon
        >
          <v-icon :color="isFavorite ? 'error' : ''"> mdi-heart </v-icon>
        </v-btn>
        <v-btn v-else small @click="handleFavoritePokemon" color="error">
          <v-icon> mdi-delete-empty </v-icon>
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Pokemon } from "@/models/pokemon";
import { namespace } from "vuex-class";

const pokemon = namespace("pokemon");

@Component
export default class PokemonCard extends Vue {
  @Prop({ required: true }) public tempPokemon!: Pokemon;
  isFavorite = false;

  created(): void {
    this.isFavorite = this.tempPokemon.favorite;
  }

  @pokemon.Mutation
  public setPokemonFavorite!: (pokemon: Pokemon) => void;

  handleFavoritePokemon(): void {
    if (this.$route.name !== "pokemon-favorites") {
      this.tempPokemon.favorite = !this.tempPokemon.favorite;
      this.isFavorite = this.tempPokemon.favorite;
    }
    this.setPokemonFavorite(this.tempPokemon);
  }
}
</script>

<style scoped></style>
