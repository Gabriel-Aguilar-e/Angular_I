import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-palindromo',
  imports: [FormsModule],
  templateUrl: './palindromo.component.html',
  styleUrl: './palindromo.component.css'
})
export class PalindromoComponent {
  @Input() palabra: string = '';
  @Output() emisor = new EventEmitter<string>();

  esPalindromo(palabra: string): string {
    const palabraSinEspacios = palabra.toLowerCase().replace(/\s+/g, '');
    const esNumero = !isNaN(Number(palabraSinEspacios));//verificador de numero o paalabra
    if (esNumero) {
      const esCapicua = palabraSinEspacios === palabraSinEspacios.split('').reverse().join('');
      return esCapicua ? `Es capicúa: ${palabra}` : `No es capicúa: ${palabra}`;
    }
    const esPalindromo = palabraSinEspacios === palabraSinEspacios.split('').reverse().join('');
    return esPalindromo ? `Es palíndromo: ${palabra}` : `No es palíndromo: ${palabra}`;
  }
}
