import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BidsComponent } from './pages/bids/bids.component';
import { UsersComponent } from './pages/users/users.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';
import { AuthguardService as AuthGuard} from './services/authguard.service';
import { RegisterComponent } from './pages/register/register.component';
const routes: Routes = [
  { path: '', component: HomeComponent,canActivate : [AuthGuard]  },  
  { path: 'login', component: LoginComponent },
  { path : 'signup', component : RegisterComponent},
  { path: 'bids', component: BidsComponent,canActivate : [AuthGuard]  },
  { path: 'users', component: UsersComponent,canActivate : [AuthGuard]  },
  { path: 'warehouse', component: WarehouseComponent,canActivate : [AuthGuard]  },
  { path: '**', component: NotFoundComponent,canActivate : [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
