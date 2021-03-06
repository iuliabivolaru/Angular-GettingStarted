import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
<div>
    <nav class='navbar navbar-default'>
      <ul class='nav navbar-nav'>
        <li><a [routerLink]="['/welcome']">Home</a></li>
        <li><a [routerLink]="['/products']">Product List</a></li>
       </ul>
    </nav>
    <div class='container'>
        <router-outlet></router-outlet>
    </div>
</div>`
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
