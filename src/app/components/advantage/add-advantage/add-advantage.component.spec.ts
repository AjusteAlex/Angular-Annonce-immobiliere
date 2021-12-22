import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvantageComponent } from './add-advantage.component';

describe('AddAdvantageComponent', () => {
  let component: AddAdvantageComponent;
  let fixture: ComponentFixture<AddAdvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvantageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
