import {Injectable} from '@angular/core';
import {UtilisateurDto} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  storeToken(token: string ): void {
    localStorage.setItem('token', token);
  }

  storeUser(user: UtilisateurDto ): void {
    localStorage.setItem('ConnectedUser', JSON.stringify(user));

  }

  storeUsername(username: string ): void {
    localStorage.setItem('username', username);
  }

  getToken(): string {
    return localStorage.getItem('token') as string;
  }

  getUser(): UtilisateurDto {
    return JSON.parse(localStorage.getItem('ConnectedUser') as string) as UtilisateurDto;
  }

  getUsername(): string {
    return localStorage.getItem('username') as string;
  }
}
