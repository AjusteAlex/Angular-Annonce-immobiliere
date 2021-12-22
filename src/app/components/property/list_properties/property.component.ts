import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PropertyService } from 'src/app/shared/services/property/property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  properties: any[]= [];
  
  constructor(private propertyService:PropertyService, private router:Router) { }

  ngOnInit(): void {
    this.getProperties();
  }

  
  getProperties():void{
    this.propertyService.getProperties()
    .then(properties => this.properties= properties)
    .catch(err => console.log(err))
  }

  delete(id:string): void{
    this.propertyService.deleteProperty(id)
    .then(() => {
      this.getProperties()
    })
    .catch(err => console.log(err))
  }
}
