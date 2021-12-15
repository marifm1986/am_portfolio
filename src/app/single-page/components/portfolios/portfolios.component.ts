import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements OnInit {
  features: any[] = [
    {
      image: '../../../../assets/images/kanban.png',
      title: 'Web App',
      description: 'Kanban board for managing tasks.',
      urls: 'https://kanban-fire-workshop-8ca5d.web.app/'
    },
    {
      image: '../../../../assets/images/ds.png',
      title: 'Web App',
      description: 'Designe system for fast productivity',
      urls: 'https://designsystemhx.web.app/icons'
    },
    {
      image: '../../../../assets/portf/03.png',
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis.',
      urls: ''
    },
    {
      image: '../../../../assets/portf/04.png',
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis.',
      urls: ''
    },
    {
      image: '../../../../assets/portf/05.png',
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis.',
      urls: ''
    },
   
    {
      image: '../../../../assets/portf/06.png',
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis.',
      urls: ''
    },
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
