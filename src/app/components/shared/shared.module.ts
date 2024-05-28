import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { LayoutSidenavComponent } from './layout-sidenav/layout-sidenav.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    LayoutSidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
    , MatFormFieldModule, MatInputModule, MatSelectModule
    //import de grid
    ,MatGridListModule, NgFor    
  ],
  exports: [LayoutSidenavComponent]  
})
export class SharedModule { }
