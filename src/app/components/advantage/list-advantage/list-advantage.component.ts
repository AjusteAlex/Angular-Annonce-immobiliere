import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvantageService } from 'src/app/shared/services/advantage/advantage.service';

@Component({
  selector: 'app-list-advantage',
  templateUrl: './list-advantage.component.html',
  styleUrls: ['./list-advantage.component.css']
})
export class ListAdvantageComponent implements OnInit {
  advantages: any[]= [];
  
  constructor(private advantageService:AdvantageService, private router:Router) { }

  ngOnInit(): void {
    this.getAdvantages()
  }

  getAdvantages():void{
    this.advantageService.getAdvantages()
    .then( advantages => this.advantages= advantages)
    .catch(err => console.log(err))
  }

  delete(id:string): void{
    this.advantageService.deleteAdvantage(id)
    .then(() => {
      this.getAdvantages()
    })
    .catch(err => console.log(err))
  }

}
