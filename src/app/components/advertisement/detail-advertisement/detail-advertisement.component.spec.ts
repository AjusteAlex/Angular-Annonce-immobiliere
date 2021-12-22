import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAdvertisementComponent } from './detail-advertisement.component';

describe('DetailAdvertisementComponent', () => {
  let component: DetailAdvertisementComponent;
  let fixture: ComponentFixture<DetailAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAdvertisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
