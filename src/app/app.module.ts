import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  MatTabsModule
} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { MdePopoverModule } from '@material-extended/mde';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Ng5SliderModule } from 'ng5-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// RECOMMENDED
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ChartsModule } from 'ng2-charts';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularPaginatorModule } from 'angular-paginator';

import {Globals} from './globals';
import { SidebarpartComponent } from './components/global/sidebarpart/sidebarpart.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { BidsComponent } from './pages/bids/bids.component';
import { UsersComponent } from './pages/users/users.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';
import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';
import { GlobalService } from './services/global.service';

import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { LoadingComponent } from './components/loading/loading.component';
import { RegisterComponent } from './pages/register/register.component';
import { PostBidComponent } from './pages/post-bid/post-bid.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
 
export const MaterialModules = [
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatCheckboxModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SidebarpartComponent,
    LoginComponent,
    BidsComponent,
    UsersComponent,
    WarehouseComponent,
    LoadingComponent,
    RegisterComponent,
    PostBidComponent,
    DeliveryComponent,
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NoopAnimationsModule,
    ...MaterialModules,
    NgSelectModule,
    MdePopoverModule,
    Ng5SliderModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    ChartsModule,
    AngularPaginatorModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      animationDuration: 300
    }),
    HttpClientModule
  ],
  exports: [],
  providers: [Globals,HttpService,AuthService,GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
