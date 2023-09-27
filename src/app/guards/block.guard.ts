import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const blockGuard: CanActivateFn = (route, state) => {
  let router = inject(Router); //Solo en angular 16+
  let name = 'homero'
  if (name == 'homero') {
    return true;
  } else {
    router.navigate(['/template'])
    return false;
  }
};
