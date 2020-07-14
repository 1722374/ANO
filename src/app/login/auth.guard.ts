import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot,
  UrlTree, Router} from '@angular/router';
import {LoginService} from './login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private loginService: LoginService, private router: Router) { }
  checkLogin(url: string): boolean {
    if (this.loginService.isLoggedIn) {
      return true;
    } else {
// Aufruf-URL merken, um später dorthin zurückzunavigieren
      this.loginService.redirectUrl = url;
      this.router.navigate(['/login']); // Auf LoginComponent umleiten
      return false;
    }
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }
  canActivateChild(next: ActivatedRouteSnapshot, state:
    RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }
}
