import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {SaveChangesInterface} from './save-changes-interface';

@Injectable({
  providedIn: 'root'
})

export class SaveChangesGuardGuard implements CanDeactivate<SaveChangesInterface> {
  canDeactivate(
    component: SaveChangesInterface,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
    if (component.hasUnsavedChanges()){
      return confirm('Trotz ungespeicherter Änderungen verlassen?');
    } else{
      return true;
    }
  }

}
