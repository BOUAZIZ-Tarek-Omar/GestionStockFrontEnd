import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {UtilisateurDto} from '../../../gs-api/src/models/utilisateur-dto';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  connectedUser: UtilisateurDto = {};

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.connectedUser = this.userService.getConnectedUser();
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
