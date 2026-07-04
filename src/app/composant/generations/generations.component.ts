import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';   // <--- AJOUTE CETTE LIGNE


@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})

export class GenerationsComponent {
  public generations =[
    { id: 1, name: 'Génération I' },
    { id: 2, name: 'Génération II' },
    { id: 3, name: 'Génération III' },
    { id: 4, name: 'Génération IV' },
    { id: 5, name: 'Génération V' },
    { id: 6, name: 'Génération VI' },
    { id: 7, name: 'Génération VII' },
  ]

  /*constructor() {
    this.generations = []
  }

  addGenerations() {
    this.generations.push({
      id:1,
      name: 'Generation I'
    });
    this.generations.push({
      id:2,
      name: 'Generation II'
    });
    this.generations.push({
      id:3,
      name: 'Generation III'  
    });
    this.generations.push({
      id:4,
      name: 'Generation IV'
    });
    this.generations.push({
      id:5,
      name: 'Generation V'
    });
    this.generations.push({
      id:6,
      name: 'Generation VI' 
    });
    this.generations.push({
      id:7,
      name: 'Generation VII'
    });
}*/
}
