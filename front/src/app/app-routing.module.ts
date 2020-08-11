import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { OrcamentoComponent } from './views/orcamento/orcamento.component';
import { FreebiesComponent } from './views/freebies/freebies.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';

const routes: Routes = [
    { path: '', component: HomeComponent, data: { animationState: "Home" } },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'portfólio', component: PortfolioComponent, data: { animationState: "Portfólio" } },
    { path: 'orçamento', component: OrcamentoComponent, data: { animationState: "Orçamento" } },
    { path: 'freebies', component: FreebiesComponent, data: { animationState: "Freebies" } },
    { path: '**', redirectTo: '', data: { animationState: "Any" } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
