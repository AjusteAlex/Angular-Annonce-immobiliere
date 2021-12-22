import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/shared/services/property/property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  propertyForm = this.fb.group({
    name:['', Validators.required],
  })
  constructor(private fb:FormBuilder, private propertyService:PropertyService, private router:Router) { }

  ngOnInit(): void {
  }
  submit():void{
    this.propertyService.addProperty(this.propertyForm.value)
    .then( () => {
      this.router.navigate(['/properties']);
    })
    .catch( err => console.log(err))
  }

}
