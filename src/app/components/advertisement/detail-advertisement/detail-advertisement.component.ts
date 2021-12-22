import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertisementService } from 'src/app/shared/services/advertisement/advertisement.service';

@Component({
  selector: 'app-detail-advertisement',
  templateUrl: './detail-advertisement.component.html',
  styleUrls: ['./detail-advertisement.component.css']
})
export class DetailAdvertisementComponent implements OnInit {
  id: string = '';
  advertisement:any = {} 

  constructor(private route:ActivatedRoute,private advertisementService:AdvertisementService) {
    this.route.params.subscribe( params => {
      this.id = params['id'];
    })
  }

  ngOnInit(): void {
    this.getAdvertisement()
  }

  getAdvertisement(){
    this.advertisementService.getAdvertisement(this.id)
    .then( advertisement => this.advertisement = advertisement)
    .catch( err => console.log(err))
  }
}
