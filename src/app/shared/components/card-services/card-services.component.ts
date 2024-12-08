import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-services',
  imports: [],
  templateUrl: './card-services.component.html',
  styleUrl: './card-services.component.css',
})
export class CardServicesComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() text: string = '';
}
