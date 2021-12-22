import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdvertisementComponent } from './list-advertisement.component';

describe('ListAdvertisementComponent', () => {
  let component: ListAdvertisementComponent;
  let fixture: ComponentFixture<ListAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdvertisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
