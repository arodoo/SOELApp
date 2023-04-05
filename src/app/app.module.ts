import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { NavigationComponent } from './blocks/navigation/navigation.component';
import { FooterComponent } from './blocks/footer/footer.component';
import { HeaderComponent } from './script/header/header.component';
import { ScriptComponent } from './script/script/script.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
 
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    ScriptComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
