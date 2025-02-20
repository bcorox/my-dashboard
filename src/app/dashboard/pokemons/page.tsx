import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data: PokemonsResponse = await response.json();
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/")[6],
    name: pokemon.name
  }));

  

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl">Listado POkemons <small>estáticos</small></span>
      <PokemonGrid pokemons={pokemons} />

    </div>
  );
}

/*      <div className="flex flex-wrap gap-10 items-center justify-center">
        
        {
          pokemons.map((pokemon) => (
            <div key={pokemon.id} className="flex flex-col items-center">
              <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                width={100}
                height={100} alt={pokemon.name} />
              <span>{pokemon.name}</span>
            </div>
          ))
        }
      </div> */