import request from "@/api/api";
import { Pokemon, ResultPokemon } from "@/models/pokemon";

const pokemonServices = {
  list: (params: URLSearchParams): Promise<ResultPokemon> =>
    request.getParams<ResultPokemon>("/pokemon", params),
  details: (url: string): Promise<Pokemon> => request.get<Pokemon>(url),
};

export default pokemonServices;
