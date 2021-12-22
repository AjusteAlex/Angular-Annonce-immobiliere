import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdvantageComponent } from './list-advantage.component';

describe('ListAdvantageComponent', () => {
  let component: ListAdvantageComponent;
  let fixture: ComponentFixture<ListAdvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdvantageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
