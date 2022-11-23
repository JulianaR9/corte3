import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/servicios/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons= [];
  
  busqueda:string= "";

  pokemonsData:any[]=[];

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
   /* this.pokemonService.getPokemons().subscribe(respuesta=>{
      this.pokemons=respuesta.results;
      console.log(this.pokemons)
      console.log(this.pokemonsData)
    })*/
    this.getPokemondata();

    
  }
  getPokemondata(){
    for(let i=1; i <= 150; i++)
    (respuesta:any)=>
      {
      //this.pokemonService.getPokemon(i).subscribe(respuesta => 
       // this.pokemonsData.push(respuesta);
       if(this.busqueda ===""||respuesta.name.includes(this.busqueda)){
        this.pokemonsData.push(respuesta)

      }
      
    
      }
    console.log(this.pokemonsData)
  }
}
