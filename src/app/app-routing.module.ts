import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardRoutingModule } from './components/main-dashboard/main-dashboard-routing.module';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: '/dashboard' },

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: false, useHash: true}
  ),
  MainDashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
