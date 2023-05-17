import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (true) return true;
  else return false;
};

// export class AuthorizationGuard implements CanActivate, CanActivateChild, CanLoad {
//   constructor(public router: Router, private authService: AuthenticationService) { }
//   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     const ids = next.data.param;
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user) {
//       const user_roles = (Array.isArray(user.roles) && user.roles.length) ? user.roles.map(u => u.toString()) : [];
//       return ids.some(item => user_roles.includes(item));
//     }
//     else {
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
//   canActivateChild(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
//   canLoad(
//     route: Route,
//     segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
//     return true;
//   }
// }


// anActivateChild(
//   next: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   return true;
// }
// canLoad(
//   route: Route,
//   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
//   return true;
// }
