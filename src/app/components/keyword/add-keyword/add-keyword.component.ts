import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KeywordService } from 'src/app/shared/services/keyword/keyword.service';

@Component({
  selector: 'app-add-keyword',
  templateUrl: './add-keyword.component.html',
  styleUrls: ['./add-keyword.component.css']
})
export class AddKeywordComponent implements OnInit {

  keywordForm = this.fb.group({
    name:['', Validators.required],
  })

  constructor(private fb:FormBuilder, private KeywordService: KeywordService, private router: Router) { }

  ngOnInit(): void {
  }

  submit():void{
    this.KeywordService.addKeyword(this.keywordForm.value)
    .then( () => {
      this.router.navigate(['/keywords']);
    })
    .catch( err => console.log(err))
  }
}
