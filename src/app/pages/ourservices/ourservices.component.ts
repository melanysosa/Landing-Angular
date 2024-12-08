import { Component } from '@angular/core';
import { CardServicesComponent } from '../../shared/components/card-services/card-services.component';
import { RouterModule } from '@angular/router';
import { CardService } from '../../models/models';


@Component({
  selector: 'app-ourservices',
  imports: [CardServicesComponent],
  templateUrl: './ourservices.component.html',
  styleUrl: './ourservices.component.css',
})
export class OurservicesComponent {

  services: CardService[] = [
    {
      id: 1,
      title: 'Diseño Residencial',
      imageUrl: '/assets/images/d-residencial.jpg',
      text:
        'Creamos hogares que combinan confort, funcionalidad y estética, adaptándonos a tu estilo de vida y necesidades.',
     
    },
    {
      id: 2,
      title: 'Diseño Comercial',
      imageUrl: '/assets/images/d-comercial.jpg',
      text:
        'Creamos soluciones funcionales para negocios y empresas con diseños personalizados.',
      
    },
    {
      id: 3,
      title: 'Consultoría de estilo',
      imageUrl: '/assets/images/consultoria-estilo.jpg',
      text:
        'Te ayudamos a definir el mejor estilo para tus espacios con soluciones únicas.',
     
    },
  ];
}

