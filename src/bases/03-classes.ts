import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

class Pokemon {
    constructor(
    public readonly id: number,
    public name: string
  ) {}

  get imageURL(): string {
    return `http://pokemon.com/${this.id}.jpg`
  }

  scream() {
    console.log(`${ this.name.toUpperCase() }!!!`)
  }

  speak () {
    console.log(`${ this.name }, ${ this.name }`);
  }

  async getMoves(): Promise<Move[]> {
    try {
      const urlPokemonAPI = `https://pokeapi.co/api/v2/pokemon/${this.id}`
      const { data } = await axios.get<PokeapiResponse>(urlPokemonAPI)
      return data.moves
    } catch (error) {
      console.log({ error })
      return []
    }
  }
}

export const pikachu = new Pokemon(4, "Pikachu")
console.log('object :>> ', await pikachu.getMoves());
