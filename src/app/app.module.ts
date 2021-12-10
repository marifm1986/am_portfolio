import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { LandingComponent } from './single-page/components/landing/landing.component';
import { FeatureComponent } from './single-page/components/feature/feature.component';
import { PortfoliosComponent } from './single-page/components/portfolios/portfolios.component';
import { ExperienceComponent } from './single-page/components/experience/experience.component';
import { TutorialsComponent } from './single-page/components/tutorials/tutorials.component';
import { ContactComponent } from './single-page/components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    SinglePageComponent,
    HeaderComponent,
    LandingComponent,
    FeatureComponent,
    PortfoliosComponent,
    ExperienceComponent,
    TutorialsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
