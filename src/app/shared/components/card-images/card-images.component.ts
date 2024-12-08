import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-images',
  imports: [],
  templateUrl: './card-images.component.html',
  styleUrl: './card-images.component.css',
})
export class CardImagesComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = '';

}
