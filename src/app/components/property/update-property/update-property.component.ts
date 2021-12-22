import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/shared/models/property/property';
import { PropertyService } from 'src/app/shared/services/property/property.service';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent implements OnInit {

  id: string = '';
  properties: Property[] = []

  propertiesForm = this.fb.group({
    name:['', Validators.required],
  })

  constructor(private router:Router,private route:ActivatedRoute,private fb:FormBuilder, private propertyService:PropertyService) {
    this.route.params.subscribe( params => {
      this.id = params['id'];
    })
   }

  ngOnInit(): void {
  }
  submit():void{
    this.propertyService.editProperty(this.propertiesForm.value, this.id)
    .then( () => {
      this.router.navigate(['/properties']);
    })
    .catch( err => console.log(err))
  }

}
