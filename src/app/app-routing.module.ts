import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './single-page/components/contact/contact.component';
import { ExperienceComponent } from './single-page/components/experience/experience.component';
import { FeatureComponent } from './single-page/components/feature/feature.component';
import { LandingComponent } from './single-page/components/landing/landing.component';
import { PortfoliosComponent } from './single-page/components/portfolios/portfolios.component';
import { TutorialsComponent } from './single-page/components/tutorials/tutorials.component';
import { SinglePageComponent } from './single-page/single-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: LandingComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'feature', component: FeatureComponent},
  {path: 'portfolios', component: PortfoliosComponent},
  {path: 'tutorials', component: TutorialsComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
