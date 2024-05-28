//Archivo de rutas que va importar las hijas
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './pages/main-dashboard.component';

const routes: Routes = [
{
    path: 'dashboardpath', 
    component: MainDashboardComponent,
    loadChildren: () => import('./router-child.module').then(m => m.RouterChildModule)
},

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainDashboardRoutingModule { }

