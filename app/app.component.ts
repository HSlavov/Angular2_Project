import {Component} from '@angular/core';
import {ProductService} from "./products/product.service";

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <div class="container-fluid">
                <nav class="navbar navbar-default">
                    <a class="navbar-brand">{{pageTitle}}</a>
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['/welcome']">Home</a></li>
                        <li><a [routerLink]="['/products']">Product List</a></li>
                    </ul>
                </nav>
                <div class="container">
                    <router-outlet></router-outlet>
                </div>
            </div>
        </div>
    `
})
export class AppComponent {
    pageTitle: string = 'Angular 2 project';
}
