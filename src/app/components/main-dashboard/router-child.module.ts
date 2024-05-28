import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainDashboardModule } from './main-dashboard.module';

const childRoutes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent }

]

@NgModule({
    //En import va referencia a router module
    imports: [RouterModule.forChild(childRoutes), MainDashboardModule],
    exports: [RouterModule]
})
export class RouterChildModule { }
