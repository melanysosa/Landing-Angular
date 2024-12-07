import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  titulo: string = '¡Hablemos y diseñemos juntos!';
  descripcion: string =
    'Estamos aquí para transformar tus ideas en espacios únicos. Escríbenos, y comencemos a crear el diseño que soñás.';
  email: string = 'contacto@cromainteriorismo.com';
  instagram: string = '@cromainteriorismo';
  telefono: string = '+54 9 223 555 5555';
}
