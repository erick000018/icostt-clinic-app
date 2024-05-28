import { MediaMatcher } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-sidenav',
  templateUrl: './layout-sidenav.component.html',
  styleUrls: ['./layout-sidenav.component.css']
})
export class LayoutSidenavComponent {

  mobileQuery: MediaQueryList;

  menuNav = [
    {name: "Home", route: "home", icon: "home"},
    {name: "Registro", route: "category", icon: "category"},
    {name: "Asignar cita", route: "product", icon: "category"},
    {name: "Seguimiento", route: "product", icon: "production_quantity_limits"},
    {name: "Gestor de notificaciones", route: "product", icon: "category"}
  ]

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }  

}
