import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CmdcltfrsService} from "../../services/cmdcltfrs/cmdcltfrs.service";
import {CommandeClientDto} from "../../../gs-api/src/models/commande-client-dto";
import {CommandeFournisseurDto} from "../../../gs-api/src/models/commande-fournisseur-dto";
import {ClientDto} from "../../../gs-api/src/models/client-dto";
import {ArticleService} from "../../services/article/article.service";
import {ArticleDto} from "../../../gs-api/src/models/article-dto";
import {DataService} from "../../services/DataService";
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-detail-mvt-stk-article',
  templateUrl: './detail-mvt-stk-article.component.html',
  styleUrls: ['./detail-mvt-stk-article.component.scss']
})
export class DetailMvtStkArticleComponent implements OnInit {
  @Input() article: ArticleDto | undefined;
  sum?: number;
  valeur = new Map();
  @Input() index?:number;
  compteur:number=0;
  constructor(private dataService: DataService) {


  }

  ngOnInit(): void {
    this.dataService.currentSum.subscribe((data) => {

      if (typeof data!=='object') {
        this.valeur?.set(this.compteur,data);
        this.compteur++;
        this.sum = data;


      }
    });
  }


}
