import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Advertisement } from 'src/app/shared/models/advertisement/advertisement';
import { AdvertisementService } from 'src/app/shared/services/advertisement/advertisement.service';
import { PropertyService } from 'src/app/shared/services/property/property.service';
import { Property } from 'src/app/shared/models/property/property';
import { Keyword } from 'src/app/shared/models/keyword/keyword';
import { KeywordService } from 'src/app/shared/services/keyword/keyword.service';
import { AdvantageService } from 'src/app/shared/services/advantage/advantage.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.css']
})
export class AddAdvertisementComponent implements OnInit {
  advertisement: Advertisement[] = []
  properties: Property[] = []
  keywords: Property[] = []
  advantages: Property[] = []
  users: Property[] = []

  advertisementForm = this.fb.group({
    title:['', Validators.required],
    price: ['',Validators.required],
    sector: ['',Validators.required],
    nbpieces: ['', Validators.required],
    description: ['', ],
    PropertyId: ['Maison', Validators.required],
    Keywords: ['', Validators.required],
    Advantages: ['', Validators.required],
    UserId: ['', Validators.required],
    picture: [''],
  })

  constructor(private fb:FormBuilder,private userService:UserService,private advantagesService:AdvantageService,private keywordService:KeywordService, private advertisementService:AdvertisementService, private router:Router, private propertyService:PropertyService) { }


  ngOnInit(): void {
    this.getProperties()
    this.getKeywords()
    this.getAdvantages()
    this.getUsers()
  }


  getProperties():void{
    this.propertyService.getProperties()
    .then(properties => this.properties= properties)
    .catch(err => console.log(err))
  }
  getKeywords():void{
    this.keywordService.getkeywords()
    .then(keywords => this.keywords= keywords)
    .catch(err => console.log(err))
  }
  getAdvantages():void{
    this.advantagesService.getAdvantages()
    .then(advantages => this.advantages= advantages)
    .catch(err => console.log(err))
  }
  getUsers():void{
    this.userService.getUsers()
    .then(users => this.users= users)
    .catch(err => console.log(err))
  }

  submit():void{
    console.log(this.advertisementForm.value)
    this.advertisementService.addAdvertisement(this.advertisementForm.value)
    .then( () => {
      this.router.navigate(['/']);
    })
    .catch( err => console.log(err))
  }

}
