import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Keyword } from 'src/app/shared/models/keyword/keyword';
import { KeywordService } from 'src/app/shared/services/keyword/keyword.service';

@Component({
  selector: 'app-update-keyword',
  templateUrl: './update-keyword.component.html',
  styleUrls: ['./update-keyword.component.css']
})
export class UpdateKeywordComponent implements OnInit {
  id: string = '';
  keyword: Keyword[] = []

  keywordForm = this.fb.group({
    name:['', Validators.required],
  })
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private keywordService:KeywordService, private router:Router) { 
    this.route.params.subscribe( params => {
      this.id = params['id'];
    })
  }

  ngOnInit(): void {
  }

  submit():void{
    this.keywordService.editKeyword(this.keywordForm.value, this.id)
    .then( () => {
      this.router.navigate(['/keywords']);
    })
    .catch( err => console.log(err))
  }

}
