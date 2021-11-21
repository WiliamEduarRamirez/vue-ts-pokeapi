<template>
  <layout>
    <router-view />
  </layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Layout from "@/layouts/Layout.vue";
@Component({
  components: { Layout },
})
export default class App extends Vue {}
</script>
