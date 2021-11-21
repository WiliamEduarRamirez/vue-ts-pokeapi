<template>
  <v-col>
    <template v-show="pagination && page">
      <div class="text-center">
        <v-pagination
          :disabled="loading"
          v-model="page"
          @input="() => changePage()"
          :length="pagination.totalPages"
          :total-visible="10"
          circle
        ></v-pagination>
      </div>
    </template>
  </v-col>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { Pagination } from "@/models/pagination";

@Component
export default class PokemonPagination extends Vue {
  @Prop({ required: true }) readonly pagination: Pagination | undefined;
  @Prop({ required: true }) readonly loading: boolean | undefined;
  page = 1;

  @Emit()
  changePage(): number {
    return this.page;
  }
}
</script>

<style scoped></style>
