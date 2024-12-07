import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card-services',
  imports: [],
  templateUrl: './card-services.component.html',
  styleUrl: './card-services.component.css',
})
export class CardServicesComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() hoverText: string = '';
}
