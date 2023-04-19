import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { NavigationComponent } from './blocks/navigation/navigation.component';
import { FooterComponent } from './blocks/footer/footer.component';
import { ObrasComponent } from './components/obras/obras.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
 
    NavigationComponent,
    FooterComponent,
    ObrasComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
