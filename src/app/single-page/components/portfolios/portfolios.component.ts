import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements OnInit {
  features: any[] = [
    {
      image: '../../../../assets/portf/01.png',
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis.'
    },
    {
      image: '../../../../assets/portf/02.png',
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis.'
    },
    {
      image: '../../../../assets/portf/03.png',
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis.'
    },
    {
      image: '../../../../assets/portf/04.png',
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis.'
    },
    {
      image: '../../../../assets/portf/05.png',
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis.'
    },
   
    {
      image: '../../../../assets/portf/06.png',
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis.'
    },
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
