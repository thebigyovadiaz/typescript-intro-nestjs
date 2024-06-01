import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiAdapterAxios, PokeApiAdapterFetch } from '../api/pokeApi.adapter';

class Pokemon {

  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: HttpAdapter,
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
      const data = await this.http.getRequest<PokeapiResponse>(urlPokemonAPI)
      return data.moves
    } catch (error) {
      console.log({ error })
      return []
    }
  }
}

const pokeApiAxios = new PokeApiAdapterAxios()
// const pokeApiFetch = new PokeApiAdapterFetch()

export const pikachu = new Pokemon(4, "Pikachu", pokeApiAxios)
console.log(await pikachu.getMoves());
