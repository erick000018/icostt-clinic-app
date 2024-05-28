import { Component } from '@angular/core';

type ColumnKey = 'name' | 'age' | 'country';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {

  columns = [
    { header: 'Nombre', field: 'name' as ColumnKey, footer: 'Total' },
    { header: 'Edad', field: 'age' as ColumnKey, footer: '' },
    { header: 'País', field: 'country' as ColumnKey, footer: '' }
  ];

  data = [
    { name: 'Juan', age: 25, country: 'España' },
    { name: 'Ana', age: 30, country: 'México' },
    { name: 'Luis', age: 35, country: 'Argentina' }
  ];  

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];  

}
