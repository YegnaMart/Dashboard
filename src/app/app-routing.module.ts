import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BidsComponent } from './pages/bids/bids.component';
import { UsersComponent } from './pages/users/users.component';
const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'bids', component: BidsComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
