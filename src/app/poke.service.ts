import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokeService {

  constructor(private _http:HttpClient) { }
  getPokemon(pokemon){
  	return this._http.get('https://pokeapi.co/api/v2/pokemon/'+pokemon.dexNumber)
  }
}
