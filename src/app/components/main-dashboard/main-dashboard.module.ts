import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MainDashboardComponent } from './pages/main-dashboard.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PacienteComponent } from './paciente/paciente/paciente.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { CitaComponent } from './cita/cita/cita.component';
import { ServappComponent } from './servapp/servapp/servapp.component';
import { ServappNotificadorComponent } from './servapp/servapp-notificador/servapp-notificador.component';



@NgModule({
  declarations: [
    MainDashboardComponent,
    HomeComponent,
    PacienteComponent,
    CitaComponent,
    ServappComponent,
    ServappNotificadorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,    
    SharedModule,
    //imports por paciente, mientras no es standalone
    MatFormFieldModule, MatInputModule, MatSelectModule
    //import de grid
    ,MatGridListModule, NgFor
  ]
})
export class MainDashboardModule { }
