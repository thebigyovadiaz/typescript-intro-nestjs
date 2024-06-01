import axios from "axios";

export interface HttpAdapter {
  getRequest<T>(url: string): Promise<T>;
}

export class PokeApiAdapterAxios implements HttpAdapter {
  private readonly axios = axios

  async getRequest<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url)
    console.log('PokeApiAdapterAxios');
    return data
  }
}

export class PokeApiAdapterFetch implements HttpAdapter {

  async getRequest<T>(url: string): Promise<T> {
    const response = await fetch(url)
    const data: T = await response.json()
    console.log('PokeApiAdapterFetch');
    return data
  }
}
