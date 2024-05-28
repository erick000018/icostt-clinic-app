import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutSidenavComponent } from './layout-sidenav/layout-sidenav.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    LayoutSidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
  ],
  exports: [LayoutSidenavComponent]  
})
export class SharedModule { }
