import { Module, Mutation, Action, VuexModule } from "vuex-module-decorators";
import { Pokemon } from "@/models/pokemon";

@Module({ namespaced: true })
class PokemonModule extends VuexModule {
  total: number | null = null;
  pokemons: Pokemon[] = [];

  @Mutation
  public setPokemonFavorite(payload: Pokemon): void {
    const exist = this.pokemons.find((x) => x.id === payload.id);
    if (exist) {
      this.pokemons = this.pokemons.filter((x) => x.id !== payload.id);
    } else {
      this.pokemons = [...this.pokemons, payload];
    }
    localStorage.setItem("pokemons", JSON.stringify(this.pokemons));
    this.total = this.pokemons.length;
  }

  @Mutation
  public setTotal(): void {
    this.total = this.pokemons.length;
  }

  @Mutation
  public setPokemons(payload: Pokemon[]): void {
    this.pokemons = payload;
  }

  @Action
  public loadFavoritesPokemons(): void {
    this.context.commit(
      "setPokemons",
      JSON.parse(localStorage.getItem("pokemons") || "[]")
    );
    this.context.commit("setTotal");
  }

  get getTotal(): number | null {
    return this.total;
  }

  get getPokemons(): Pokemon[] {
    return this.pokemons;
  }
}
export default PokemonModule;
