import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainDashboardModule } from './main-dashboard.module';
import { PacienteComponent } from './paciente/paciente/paciente.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { CitaComponent } from './cita/cita/cita.component';
import { ServappComponent } from './servapp/servapp/servapp.component';
import { ServappNotificadorComponent } from './servapp/servapp-notificador/servapp-notificador.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const childRoutes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'paciente', component: PacienteComponent },
{ path: 'cita', component: CitaComponent },
{ path: 'seguimiento', component: ServappComponent },
{ path: 'notificador', component: ServappNotificadorComponent }

]

@NgModule({
    //En import va referencia a router module
    imports: [RouterModule.forChild(childRoutes), MainDashboardModule, 
        MatFormFieldModule, MatInputModule, MatSelectModule
        //import de grid
        ,MatGridListModule, NgFor
        //
        ,FormsModule
        //Para el datepicker
        ,MatCardModule, MatDatepickerModule, MatNativeDateModule
    ],
    exports: [RouterModule]
})
export class RouterChildModule { }
