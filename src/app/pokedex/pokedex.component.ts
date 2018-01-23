import { Component, OnInit } from '@angular/core';
import { PokeService } from './../poke.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemon: any = {dexNumber: ""};
  displayedPokemon;
  constructor(private _pokeService: PokeService) { }

  ngOnInit() {
  }
  requestPokemon(){
  	console.log('requested number,', this.pokemon.dexNumber);
  	this._pokeService.getPokemon(this.pokemon)
  	.subscribe((data:any)=>{
  		console.log('got a response:', data);
  		this.displayedPokemon = data;
  		console.log(this.displayedPokemon.name);
  	})
  }

}
