import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
 
    }
    canActivate(){
        const token = sessionStorage.getItem('token');
        if (token) { 
            return true; 
        }
        this.router.navigate(["login"]);
        return false;
    }

}
