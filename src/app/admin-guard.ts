import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private router: Router) {
 
    }
    canActivate(){
        const identity = localStorage.getItem('identity');
        if (identity=="admin"||identity=="up") { 
            return true; 
        }
        this.router.navigate(["guide"]);
        return false;
    }

}