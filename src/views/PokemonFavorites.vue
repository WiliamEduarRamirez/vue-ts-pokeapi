<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="redirectListPokemons" small rounded>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <pokemon-favorites-list></pokemon-favorites-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PokemonFavoritesList from "@/modules/pokemon-favorites/PokemonFavoritesList.vue";
@Component({
  components: { PokemonFavoritesList },
})
export default class PokemonFavorites extends Vue {
  redirectListPokemons(): void {
    this.$router.push({ path: "/" });
  }
}
</script>

<style scoped></style>
