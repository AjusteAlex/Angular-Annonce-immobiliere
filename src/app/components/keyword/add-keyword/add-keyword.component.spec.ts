import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKeywordComponent } from './add-keyword.component';

describe('AddKeywordComponent', () => {
  let component: AddKeywordComponent;
  let fixture: ComponentFixture<AddKeywordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKeywordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
