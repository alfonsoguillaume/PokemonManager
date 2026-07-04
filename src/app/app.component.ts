import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenerationsComponent } from "./composant/generations/generations.component";
import { PokemonsComponent } from "./composant/pokemons/pokemons.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenerationsComponent, PokemonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PokemonManager';
}
