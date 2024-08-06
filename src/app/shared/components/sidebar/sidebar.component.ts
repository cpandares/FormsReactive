import { Component } from '@angular/core';


interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  menuItems: MenuItem[] = [
    {
      title: 'Básico',
      route: '/reactive/basic'
    },
    {
      title: 'Dinamicos',
      route: '/reactive/dinamic'
    },
    {
      title: 'Switches',
      route: '/reactive/switches'
    }
  ];

  public authMenuItems: MenuItem[] = [
    {
      title: 'registro',
      route: '/auth'
    }
   
  ];

  constructor() { }

}
