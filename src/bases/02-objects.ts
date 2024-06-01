const pokemonIds = [1,2,3,4,5]
pokemonIds.push(+"25")

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

const bulbasaur: Pokemon = {
  id: 1,
  name: "Bulbasaur"
}

const charmander: Pokemon = {
  id: 2,
  name: "Charmander"
}

const pokemons: Pokemon[] = []
pokemons.push(bulbasaur, charmander)

export {
  pokemonIds,
  bulbasaur,
  charmander,
  pokemons
}
