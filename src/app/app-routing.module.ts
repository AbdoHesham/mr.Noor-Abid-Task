import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckOutComponent } from './layout/check-out/check-out.component';
import { FinalStepComponent } from './layout/check-out/final-step/final-step.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},

  {path:'home' , component:HomeComponent},

{path:'checkout' , component:CheckOutComponent},
{path:'checkout/FinalStep' , component:FinalStepComponent},
{path:'**' , component:HomeComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
