import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router:Router,private _authenticationService:AuthenticationService){}
  canActivate(
    route:ActivatedRouteSnapshot,
    //next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser=this._authenticationService.getCurrentUser;
      if(currentUser){
        return true;
      }
       // not logged in so redirect to login page with the return url
       this._router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
    return false;
  }
  
}
