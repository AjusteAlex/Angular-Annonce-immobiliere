import { Component, OnInit } from '@angular/core';
import { AdvantageService } from 'src/app/shared/services/advantage/advantage.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-advantage',
  templateUrl: './add-advantage.component.html',
  styleUrls: ['./add-advantage.component.css']
})
export class AddAdvantageComponent implements OnInit {

  advantageForm = this.fb.group({
    name:['', Validators.required],
  })

  constructor(private fb:FormBuilder, private AdvantageService: AdvantageService, private router: Router) { }

  ngOnInit(): void {
  }

  submit():void{
    this.AdvantageService.addAdvantage(this.advantageForm.value)
    .then( () => {
      this.router.navigate(['/advantages']);
    })
    .catch( err => console.log(err))
  }
}
