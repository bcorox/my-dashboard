export interface PokemonsResponse {
    count: number; // Total number of Pokemon
    next: string | null; // URL for the next page of results
    previous: string | null; // URL for the previous page of results
    results: PokemonListItem[]; // Array of Pokemon items
  }
  
  interface PokemonListItem {
    name: string; // Name of the Pokemon
    url: string; // URL for the Pokemon details
  }