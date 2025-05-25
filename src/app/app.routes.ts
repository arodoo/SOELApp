import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ConstructionsComponent } from './features/constructions/constructions.component';
import { ConstructionsListComponent } from './features/constructions-list/constructions-list.component';
import { AboutComponent } from './features/about/about.component';
import { CompanyServicesComponent } from './features/company-services/company-services.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'inicio/:seccion', component: HomeComponent },
  { path: 'acerca-de', component: AboutComponent },
  { path: 'experiencia', component: ConstructionsComponent },
  { path: 'todas-las-obras', component: ConstructionsListComponent },
  { path: 'servicios', component: CompanyServicesComponent },
  { path: 'contacto', component: ContactComponent },
  // Legacy redirects for backward compatibility
  { path: 'home', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'home/:id', redirectTo: '/inicio/:id', pathMatch: 'full' },
  { path: 'obras', redirectTo: '/experiencia', pathMatch: 'full' },
  { path: 'lista-obras', redirectTo: '/todas-las-obras', pathMatch: 'full' },
  { path: 'about', redirectTo: '/acerca-de', pathMatch: 'full' },
  { path: 'services', redirectTo: '/servicios', pathMatch: 'full' },
  { path: 'contact', redirectTo: '/contacto', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];