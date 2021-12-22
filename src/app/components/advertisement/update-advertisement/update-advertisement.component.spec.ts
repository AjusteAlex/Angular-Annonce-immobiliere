import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdvertisementComponent } from './update-advertisement.component';

describe('UpdateAdvertisementComponent', () => {
  let component: UpdateAdvertisementComponent;
  let fixture: ComponentFixture<UpdateAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdvertisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
