import { Component } from '@angular/core';
import { CardImagesComponent } from '../../shared/components/card-images/card-images.component';
import { CardServicesComponent } from '../../shared/components/card-services/card-services.component';

@Component({
  selector: 'app-about',
  imports: [CardImagesComponent, CardServicesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  imageUrl = '/assets/images/team-5.jpg';
  cardsAbout = [
    {
      id: 1,
      title: 'Diseño Residencial',
      imageUrl: '/assets/images/team-3.jpg',
      hoverText:
        'Creamos hogares que combinan confort, funcionalidad y estética, adaptándonos a tu estilo de vida y necesidades.',
    },
    {
      id: 2,
      title: 'Diseño Comercial',
      imageUrl: '/assets/images/team-4.jpg',
      hoverText:
        'Creamos soluciones funcionales para negocios y empresas con diseños personalizados.',
    },
    {
      id: 3,
      title: 'Consultoría de estilo',
      imageUrl: '/assets/images/team-2.jpg',
      hoverText:
        'Te ayudamos a definir el mejor estilo para tus espacios con soluciones únicas.',
    },
  ];
}
