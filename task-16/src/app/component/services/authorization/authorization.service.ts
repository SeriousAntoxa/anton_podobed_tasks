import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }
    
  public setAuth(validAdmin: boolean): void {
    localStorage.setItem('admin', String(validAdmin))
  }

}
