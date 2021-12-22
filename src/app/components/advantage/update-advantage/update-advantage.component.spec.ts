import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdvantageComponent } from './update-advantage.component';

describe('UpdateAdvantageComponent', () => {
  let component: UpdateAdvantageComponent;
  let fixture: ComponentFixture<UpdateAdvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdvantageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
