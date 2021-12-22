import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvertisementComponent } from './add-advertisement.component';

describe('AddAdvertisementComponent', () => {
  let component: AddAdvertisementComponent;
  let fixture: ComponentFixture<AddAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvertisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
