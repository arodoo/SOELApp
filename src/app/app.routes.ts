import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ConstructionsListComponent } from './features/constructions-list/constructions-list.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'todas-las-obras', component: ConstructionsListComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '/inicio' }
];