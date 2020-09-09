import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Modules
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { CoverComponent } from './components/cover/cover.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ImggridComponent } from './components/imggrid/imggrid.component';
import { JumbotronButtonComponent } from './components/jumbotron-button/jumbotron-button.component';
import { TxtgridComponent } from './components/txtgrid/txtgrid.component';

//Services
import { SiteSettingsService } from "./services/site-settings.service";

//Views
import { FreebiesComponent } from './views/freebies/freebies.component';
import { HomeComponent } from './views/home/home.component';
import { OrcamentoComponent } from './views/orcamento/orcamento.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { PortfolioItemComponent } from './views/portfolio-item/portfolio-item.component';
import { BackButtonComponent } from './components/back-button/back-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    FooterComponent,
    ImggridComponent,
    TxtgridComponent,
    JumbotronButtonComponent,
    PortfolioComponent,
    OrcamentoComponent,
    FreebiesComponent,
    HomeComponent,
    PortfolioItemComponent,
    BackButtonComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    LazyLoadImageModule,
    NgbModule,
  ],
  providers: [
    SiteSettingsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
