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
      <div style="width: 100%" class="text-center">
        <v-btn color="primary" small>
          Ver mas
          <v-icon right> mdi-arrow-right-thick </v-icon>
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Pokemon } from "@/models/pokemon";

@Component
export default class PokemonCard extends Vue {
  @Prop({ required: true }) readonly tempPokemon: Pokemon | undefined;
}
</script>

<style scoped></style>
