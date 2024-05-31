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
    {name: "Paciente", route: "paciente", icon: "person_outline"},
    {name: "Asignar cita", route: "cita", icon: "add_task"},
    {name: "Seguimiento", route: "seguimiento", icon: "ads_click"},
    {name: "Gestor de notificaciones", route: "notificador", icon: "notifications_active"}
  ]

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }  

}
