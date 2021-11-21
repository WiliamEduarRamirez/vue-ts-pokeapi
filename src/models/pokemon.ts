export interface ResultPokemon {
  count: number;
  next: string;
  results: Result[];
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprite;
}

interface Sprite {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface Result {
  name: string;
  url: string;
}
