import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  nav: Nav[] = [
    {
      path: '/home',
      name: 'Home',
      exact: true
    },
    {
      path: '/pessoa',
      name: 'Pessoa',
      exact: false
    }
  ]

}

interface Nav{
  path: string;
  name: string;
  exact: boolean;
}
