import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeywordService } from 'src/app/shared/services/keyword/keyword.service';

@Component({
  selector: 'app-list-keyword',
  templateUrl: './list-keyword.component.html',
  styleUrls: ['./list-keyword.component.css']
})
export class ListKeywordComponent implements OnInit {
  keywords: any[]= [];

  constructor(private keywordsService:KeywordService, private router:Router) { }

  ngOnInit(): void {
    this.getKeywords()
  }

  getKeywords():void{
    this.keywordsService.getkeywords()
    .then(keywords => this.keywords= keywords)
    .catch(err => console.log(err))
  }
  delete(id:string): void{
    this.keywordsService.deleteKeyword(id)
    .then(() => {
      this.getKeywords()
    })
    .catch(err => console.log(err))
  }
}
