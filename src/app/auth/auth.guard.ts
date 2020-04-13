import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';


@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate, CanLoad {
    /**
     *
     */
    constructor(private authService:AuthService) {
        
        
    }

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean>{
        return this.authService.isLoggedIn;
    }

    canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
        throw new Error("Method not implemented.");
    }
 
    
}