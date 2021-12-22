import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Advantage } from 'src/app/shared/models/advantage/advantage';
import { AdvantageService } from 'src/app/shared/services/advantage/advantage.service';

@Component({
  selector: 'app-update-advantage',
  templateUrl: './update-advantage.component.html',
  styleUrls: ['./update-advantage.component.css']
})
export class UpdateAdvantageComponent implements OnInit {
  id: string = '';
  advantages: Advantage[] = []

  advantagestForm = this.fb.group({
    name:['', Validators.required],
  })

  constructor(private route:ActivatedRoute,private router:Router,private advantageService:AdvantageService, private fb:FormBuilder) {
    this.route.params.subscribe( params => {
      this.id = params['id'];
    })
  }

  ngOnInit(): void {
    this.getAdvantages()
  }

  getAdvantages():void{
    this.advantageService.getAdvantages()
    .then(advantages => this.advantages= advantages)
    .catch(err => console.log(err))
  }
  submit():void{
    this.advantageService.editAdvantage(this.advantagestForm.value, this.id)
    .then( () => {
      this.router.navigate(['/advantages']);
    })
    .catch( err => console.log(err))
  }
}
