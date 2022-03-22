import {Component, Input, OnInit} from '@angular/core';
import {UtilisateursService} from "../../../gs-api/src/services/utilisateurs.service";
import {UtilisateurDto} from "../../../gs-api/src/models/utilisateur-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.scss']
})
export class DetailUtilisateurComponent implements OnInit {
  utilisateurDto?: UtilisateurDto;
  @Input() UtilisateurId?: number;

  constructor(private utilisateurService: UtilisateursService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.findUtilisateurById();
  }

  findUtilisateurById() {
    this.utilisateurService.findById(this.UtilisateurId as number).subscribe((data) => {
      this.utilisateurDto = data;
    })
  }

  SupprimerUser() {
    this.utilisateurService.delete(this.UtilisateurId as number).subscribe(()=>
    console.log("suppression effectué"));
  }

  editUser() {

  }
}
