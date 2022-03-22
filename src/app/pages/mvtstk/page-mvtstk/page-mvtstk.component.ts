import { Component, OnInit } from '@angular/core';
import {ArticleDto} from "../../../../gs-api/src/models/article-dto";
import {ArticleService} from "../../../services/article/article.service";
import {MvtstkService} from "../../../../gs-api/src/services/mvtstk.service";
import {MvtStkDto} from "../../../../gs-api/src/models/mvt-stk-dto";

@Component({
  selector: 'app-page-mvtstk',
  templateUrl: './page-mvtstk.component.html',
  styleUrls: ['./page-mvtstk.component.scss']
})
export class PageMvtstkComponent implements OnInit {
  articles?: ArticleDto[];
  somme?:number;

  constructor(private articleApi: ArticleService) { }

  ngOnInit(): void {
    this.collectAllArticles();
  }

  collectAllArticles() {
    this.articleApi.findAllArticles().subscribe((data) => {
      this.articles = data.sort((a,b)=>
        ((a.id as number) < (b.id as number))? -1 : 1);
      //response.sort((a, b) => (a.attribute < b.attribute ) ? -1 : 1)
    });
  }

}
