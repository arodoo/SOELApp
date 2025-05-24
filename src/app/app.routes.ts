import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ConstructionsComponent } from './features/constructions/constructions.component';
import { ConstructionsListComponent } from './features/constructions-list/constructions-list.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'obras', component: ConstructionsComponent },
  { path: 'lista-obras', component: ConstructionsListComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];