//Archivo de rutas que va importar las hijas
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './pages/main-dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

const routes: Routes = [
{
    path: 'dashboard', 
    component: MainDashboardComponent,
    loadChildren: () => import('./router-child.module').then(m => m.RouterChildModule)
},

]

@NgModule({
    imports: [RouterModule.forChild(routes), 
        MatFormFieldModule, MatInputModule, MatSelectModule
            //import de grid
    ,MatGridListModule, NgFor
    
    ],
    exports: [RouterModule]
})
export class MainDashboardRoutingModule { }

