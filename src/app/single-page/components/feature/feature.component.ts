import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  features: any[] = [
    {
      icon: '../../../../assets/icons/uiux.svg',
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis.'
    },
    {
      icon: '../../../../assets/icons/mobile.svg',
      title: 'Mobile Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis.'
    },
    {
      icon: '../../../../assets/icons/web.svg',
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis.'
    },
    {
      icon: '../../../../assets/icons/webApp.svg',
      title: 'Web App Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis.'
    },
    {
      icon: '../../../../assets/icons/frontEnd.svg',
      title: 'Font End Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis.'
    },
    {
      icon: '../../../../assets/icons/graphics.svg',
      title: 'Graphic Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis.'
    },
  ]

}
