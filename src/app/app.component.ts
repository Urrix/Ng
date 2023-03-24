import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  datos: personas[] = [
    { id: 1, nombre: 'Camila', apellido: 'Cabello', sexo: 'M' },
    { id: 2, nombre: 'Mayte', apellido: 'Uribarrien', sexo: 'M' },
    { id: 3, nombre: 'Betsy', apellido: 'Ortega', sexo: 'M' },
    { id: 4, nombre: 'Diego', apellido: 'Marquez', sexo: 'H' },
    { id: 5, nombre: 'Arturo', apellido: 'Villalobos', sexo: 'H' },
  ];
}

interface personas {
  id: number;
  nombre: string;
  apellido: string;
  sexo: string;
}
