import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from './pokemon.model'; // Import de ton interface

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {


  public pokemons: Pokemon[] = [
    { id: 1, name: 'Bulbizarre', type: 'Plante et poison', poids: 6.9, taille: 0.7,categorie: 'Graine' },
    { id: 2, name: 'Herbizarre', type: 'Plante et poison', poids: 13, taille: 1,categorie: 'Graine' },
    { id: 3, name: 'Florizarre', type: 'Plante et poison', poids: 100, taille: 2,categorie: 'Graine' },
    { id: 4, name: 'Salamèche', type: 'Feu', poids: 8.5, taille: 0.6,categorie: 'Lézard' },
    { id: 5, name: 'Reptincel', type: 'Feu', poids: 19, taille: 1.1,categorie: 'Flamme' },
    { id: 6, name: 'Dracaufeu', type: 'Feu et vol', poids: 90.5, taille: 1.7,categorie: 'Flamme' }
  ];
}