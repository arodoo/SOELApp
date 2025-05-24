import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';


import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ConstructionsComponent } from './features/constructions/constructions.component';
import { AboutComponent } from './features/about/about.component';
import { ServicesComponent } from './features/services/services.component';
import { ClientsLogosComponent } from './shared/components/clients-logos/clients-logos.component';
import { ConstructionsListComponent } from './features/constructions-list/constructions-list.component';
import { ConstructionComponent } from './features/constructions-list/construction/construction.component';
import { ConstructionMainComponent } from './features/constructions/construction-main/construction-main.component';
import { ServiceComponent } from './features/services/service/service.component';
import { ContactComponent } from './features/contact/contact.component';
 
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    ConstructionsComponent,
    AboutComponent,
    ServicesComponent,
    ClientsLogosComponent,
    ConstructionsListComponent,
    ConstructionComponent,
    ConstructionMainComponent,
    ServiceComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
