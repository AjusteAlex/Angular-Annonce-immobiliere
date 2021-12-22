import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAdvertisementComponent } from './delete-advertisement.component';

describe('DeleteAdvertisementComponent', () => {
  let component: DeleteAdvertisementComponent;
  let fixture: ComponentFixture<DeleteAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAdvertisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
