<template>
  <div class="text-center">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class customProgressCircular extends Vue {}
</script>

<style scoped></style>
