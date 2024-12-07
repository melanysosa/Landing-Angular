import { Component, input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  imports: [],
  templateUrl: './shared-button.component.html',
  styleUrl: './shared-button.component.css'
})
export class SharedButtonComponent {
titleButton = input<string>() 
}
