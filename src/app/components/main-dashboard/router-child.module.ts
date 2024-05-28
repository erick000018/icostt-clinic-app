import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const childRoutes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent }

]

@NgModule({
    //En import va referencia a router module
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class RouterChildModule { }
