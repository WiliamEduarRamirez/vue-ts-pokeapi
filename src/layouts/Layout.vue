<template>
  <v-app>
    <navbar></navbar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/layouts/navbar/Navbar.vue";

@Component({
  components: {
    Navbar,
  },
})
export default class Layout extends Vue {}
</script>

<style scoped></style>
