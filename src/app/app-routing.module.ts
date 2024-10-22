import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { EstudarComponent } from './pages/estudar/estudar.component';
import { InscricaoComponent } from './pages/inscricao/inscricao.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'estudar', component: EstudarComponent },
  { path: 'inscrever', component: InscricaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
