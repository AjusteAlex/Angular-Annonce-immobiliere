import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePropertyComponent } from './update-property.component';

describe('UpdatePropertyComponent', () => {
  let component: UpdatePropertyComponent;
  let fixture: ComponentFixture<UpdatePropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
