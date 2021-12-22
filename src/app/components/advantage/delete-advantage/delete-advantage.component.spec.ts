import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAdvantageComponent } from './delete-advantage.component';

describe('DeleteAdvantageComponent', () => {
  let component: DeleteAdvantageComponent;
  let fixture: ComponentFixture<DeleteAdvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAdvantageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
