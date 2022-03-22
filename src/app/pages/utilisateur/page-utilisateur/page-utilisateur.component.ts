import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UtilisateursService} from "../../../../gs-api/src/services/utilisateurs.service";
import {UtilisateurDto} from "../../../../gs-api/src/models/utilisateur-dto";

@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrls: ['./page-utilisateur.component.scss']
})
export class PageUtilisateurComponent implements OnInit {
  utilisateursDto?: UtilisateurDto[];
  constructor(private utilisateurService: UtilisateursService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadAllUtilisateurs();
  }
  loadAllUtilisateurs() {
    this.utilisateurService.findAll().subscribe((data) => {
      this.utilisateursDto=data;
      console.log(this.utilisateursDto);
    })
  }
  nouvelUtilisateur(): void {
    this.router.navigate(['nouvelutilisateur']);
  }
}
