import { Component } from '@angular/core';
import { SharedButtonComponent } from '../../shared/components/shared-button/shared-button.component';

@Component({
  selector: 'app-home',
  imports: [SharedButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tituloInicio: string = 'Croma Interiorismo';
  descripcionInicio: string =
    'Diseño de interiores personalizados para que tu hogar refleje tu esencia';
}
