<template>
  <v-col class="mt-5">
    <v-text-field
      solo
      dense
      style="width: 300px"
      rounded
      outlined
      label="Busca tu pokemon"
    ></v-text-field>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PokemonSearch extends Vue {}
</script>

<style scoped></style>
