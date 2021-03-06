import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class ProductDetailGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid product Id');
            // start a new navigation to redirect ot list page
            this._router.navigate(['/products']);
            //abort current navigation
            return false;

        };
        return true;
    }
}