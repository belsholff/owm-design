import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { OrcamentoComponent } from './views/orcamento/orcamento.component';
import { FreebiesComponent } from './views/freebies/freebies.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { PortfolioItemComponent } from './views/portfolio-item/portfolio-item.component';

const routes: Routes = [
    { path: '', component: HomeComponent, data: { animationState: "Home" } },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'portfolio', children: [
        { path: "", component: PortfolioComponent, data: { animationState: "Portfólio" } },
        { path: "item/:id", component: PortfolioItemComponent, data: { animationState: "PortfólioItem" } }
    ]},
    { path: 'orcamento', component: OrcamentoComponent, data: { animationState: "Orçamento" } },
    { path: 'freebies', component: FreebiesComponent, data: { animationState: "Freebies" } },
    { path: '**', redirectTo: '', data: { animationState: "Any" } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
