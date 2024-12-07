import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shared-button',
  imports: [RouterModule],
  templateUrl: './shared-button.component.html',
  styleUrl: './shared-button.component.css'
})
export class SharedButtonComponent {
titleButton = input<string>() 
}
