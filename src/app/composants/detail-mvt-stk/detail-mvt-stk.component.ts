import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticleDto} from "../../../gs-api/src/models/article-dto";
import {MvtStkDto} from "../../../gs-api/src/models/mvt-stk-dto";
import {MvtstkService} from "../../../gs-api/src/services/mvtstk.service";
import {DataService} from "../../services/DataService";
//import {DatePipe, formatDate} from "@angular/common";

@Component({
  selector: 'app-detail-mvt-stk',
  templateUrl: './detail-mvt-stk.component.html',
  styleUrls: ['./detail-mvt-stk.component.scss'],
  //providers: [DatePipe]
})
export class DetailMvtStkComponent implements OnInit {
  stockActuel?:(number | undefined)[];
  sum?:any |undefined;
  @Input() index?:number;
  @Input() articleId?: number;
  mvtStocks?:MvtStkDto[];
  constructor(
    private mvtStkApi:MvtstkService,
   //private datePipe: DatePipe,
    private dataService: DataService) {
   // this.mvt.dateMvt = this.datePipe.transform(this.maDate, 'dd/MM/yyyy');
  }
  ngOnChanges(){

  }

  ngOnInit(): void {
    this.collectMvtStockByIdArticle();

  }
  collectMvtStockByIdArticle(){
    this.mvtStkApi.mvtStkArticle(this.articleId as number).subscribe((res)=>{

      this.mvtStocks=res;
     // this.mvtStocks.map(p=>formatDate(p.dateMvt as number,'dd/MM/yyyy', 'fr') );
      //this.mvtStocks.map(p=> this.datePipe.transform(p.dateMvt,'dd/MM/yyyy','fr'));

      this.stockActuel=this.mvtStocks.map(i=>i.quantite)

       this.sum=this.stockActuel.reduce(function(a, b)
        {
          return (a as number) + (b as number);
        });
      this.dataService.changeSum(this.sum as number);

    })
  }
}
