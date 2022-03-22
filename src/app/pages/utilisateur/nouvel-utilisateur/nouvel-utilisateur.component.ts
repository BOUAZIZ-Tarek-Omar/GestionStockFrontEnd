import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UtilisateursService} from "../../../../gs-api/src/services/utilisateurs.service";
import {UtilisateurDto} from "../../../../gs-api/src/models/utilisateur-dto";
import {AdresseDto} from 'src/gs-api/src/models';

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrls: ['./nouvel-utilisateur.component.scss']
})
export class NouvelUtilisateurComponent implements OnInit {
  imgUrl: string | ArrayBuffer = "assets/product.png";
  file: File | null = null;
  errorMsg: Array<string> = [];
  utilisateursDto: UtilisateurDto = {
    id: 0,
    nom: "",
    prenom: "",
    email: "",
    dateDeNaissance: 0,
    moteDePasse: "",
    adresse: {
      adresse1: "",
      adresse2: "",
      codePostale: "",
      pays: "",
      ville: ""
    },
    photo: "",
    entreprise: {
      id: 0
    },
    roles: [{}]

  };
  utilisateurDtoFromStorage?: UtilisateurDto;

  constructor(
    private router: Router,
    private utilisateurService: UtilisateursService
  ) {
  }

//!: is not null or undefined
  ngOnInit(): void {
    this.utilisateurDtoFromStorage = JSON.parse(localStorage.getItem("connectedUser") as string);
    this.utilisateursDto.entreprise!.id = this.utilisateurDtoFromStorage!.entreprise!.id as number;
  }

  cancel(): void {
    this.router.navigate(['utilisateurs']);
  }

  save() {
    this.utilisateurService.save(this.utilisateursDto).subscribe((res) => {
      if (res!== null) {
        this.router.navigate(['utilisateurs']);
      }
    },error => {
      this.errorMsg = error.error.errors;
    })
  }
  onFileInput(files: FileList | null): void {
    if (files) {
      this.file = files.item(0);
      if (this.file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
        fileReader.onload = (event) => {
          if (fileReader.result) {
            this.imgUrl = fileReader.result;
          }
        };
      }
    }
  }
}
