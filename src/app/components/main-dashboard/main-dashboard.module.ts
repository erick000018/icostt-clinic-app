import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './pages/main-dashboard.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainDashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainDashboardModule { }
