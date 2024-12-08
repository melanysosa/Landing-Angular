import { Component } from '@angular/core';
import { CardImagesComponent } from '../../shared/components/card-images/card-images.component';
import { CardServicesComponent } from '../../shared/components/card-services/card-services.component';
import { CardImg } from '../../models/models';

@Component({
  selector: 'app-about',
  imports: [CardImagesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  imageUrl = '/assets/images/team-5.jpg';
  cardsAbout: CardImg[] = [
    {
      id: 1,
      title: 'team1',
      imageUrl: '/assets/images/team-3.jpg',
    },
    {
      id: 2,
      title: 'team2',
      imageUrl: '/assets/images/team-4.jpg',
    },
    {
      id: 3,
      title: 'team3',
      imageUrl: '/assets/images/team-2.jpg',
    },
  ];
}
