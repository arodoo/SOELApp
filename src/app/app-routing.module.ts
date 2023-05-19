import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConstructionsComponent } from './components/constructions/constructions.component';
import { ConstructionsListComponent } from './components/constructions-list/constructions-list.component';
 

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'home/:id', component: HomeComponent},
  { path: 'obras', component: ConstructionsComponent},
  {path: 'lista-obras', component: ConstructionsListComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
