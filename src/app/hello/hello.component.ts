import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorldComponent } from '../world/world.component';

@Component({
  selector: 'app-hello',
  imports: [FormsModule, WorldComponent],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {

  nombre: string = '';
  mensajeDelHijo: string = '';
  listaNombres = [
    {nombre: 'Juan', apellido: 'Perez'}
    ,{nombre: 'Maria', apellido: 'Gomez'}
    ,{nombre: 'Pedro', apellido: 'Gonzalez'}
    ,{nombre: 'Ana', apellido: 'Lopez'}
    ,{nombre: 'Luis', apellido: 'Martinez'}
    ,{nombre: 'Laura', apellido: 'Rodriguez'}
    ,{nombre: 'Carlos', apellido: 'Sanchez'}
    ,{nombre: 'Sofia', apellido: 'Ramirez'}
    ,{nombre: 'Diego', apellido: 'Hernandez'}
    ,{nombre: 'Valentina', apellido: 'Torres'}
  ]
  onEmit(mensaje: string) {
    this.mensajeDelHijo = mensaje;
    window.alert('Mensaje recibido desde el hijo: ' + mensaje);
  }
}
