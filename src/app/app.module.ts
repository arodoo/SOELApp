import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { NavigationComponent } from './blocks/navigation/navigation.component';
import { FooterComponent } from './blocks/footer/footer.component';
import { ConstructionsComponent } from './components/constructions/constructions.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ClientsLogosComponent } from './components/clients-logos/clients-logos.component';
import { ConstructionsListComponent } from './components/constructions-list/constructions-list.component';
import { ConstructionComponent } from './components/constructions-list/construction/construction.component';
import { ConstructionMainComponent } from './components/constructions/construction-main/construction-main.component';
 
 

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
 
 
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
