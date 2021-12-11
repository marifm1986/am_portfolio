import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  devDate = new Date("09/01/2018"); 
  uiDate = new Date("01/01/2014"); 
	date2 = new Date(); 

  currentDevPeriod = 0
  currentUIPeriod = 0

  // count bitween 2 days 


  constructor() { }

  ngOnInit(): void {
    this.getdays();
  }

  getdays(){
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var developmentDate = new Date(this.devDate);
    var uiUxDate = new Date(this.uiDate);
    var secondDate = new Date(this.date2);

    var getDevDays = Math.round(Math.abs((developmentDate.getTime() - secondDate.getTime())/(oneDay)));
    var getUIDays = Math.round(Math.abs((uiUxDate.getTime() - secondDate.getTime())/(oneDay)));

    this.currentDevPeriod = Math.round(getDevDays/365);
    this.currentUIPeriod = Math.round(getUIDays/365);
    console.log(this.currentDevPeriod);
    console.log(this.currentUIPeriod);
    return {getDevDays, getUIDays}; ;
    
  }


}
