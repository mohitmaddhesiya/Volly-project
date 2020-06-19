import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { MainComponent } from './component/main/main.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'dashboard', component: MainComponent,
   children: [{
    path: 'home', component: HomeComponent, data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: 'registration', component: RegistrationComponent, data: {
      breadcrumb: 'registration'
    }
  }]},
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
