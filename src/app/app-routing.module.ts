import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePageComponent } from './single-page/single-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'arif_matubber', pathMatch: 'full'},
  {path: 'arif_matubber', component: SinglePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
