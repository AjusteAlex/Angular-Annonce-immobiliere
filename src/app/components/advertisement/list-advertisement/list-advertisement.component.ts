import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../../../shared/services/advertisement/advertisement.service';

@Component({
  selector: 'app-list-advertisement',
  templateUrl: './list-advertisement.component.html',
  styleUrls: ['./list-advertisement.component.css']
})
export class ListAdvertisementComponent implements OnInit {

  advertisements: any;

  constructor(private advertisementService:AdvertisementService) { }

  ngOnInit(): void {
    this.getAdvertisements()
  }

  getAdvertisements():void{
    this.advertisementService.getAdvertisements()
    .then( advertisements => {
      this.advertisements = advertisements;
    })
    .catch(err => console.log(err))
  }

}
