import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UtilisateursService} from "../../../../gs-api/src/services/utilisateurs.service";
import {UtilisateurDto} from "../../../../gs-api/src/models/utilisateur-dto";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.scss']
})
export class PageProfilComponent implements OnInit {
  monUtilisateur?: UtilisateurDto;
  constructor(
    private userService: UserService,
    private utilisateurService: UtilisateursService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.RetrieveUserData();
  }
  RetrieveUserData(){
    this.utilisateurService.findById(this.userService.getConnectedUser().id as number).subscribe((data)=>{
      this.monUtilisateur=data;
      console.log(this.monUtilisateur);
    })
  }
  modifierMotDePasse(): void {
    this.router.navigate(['changermotdepasse']);
  }
}
