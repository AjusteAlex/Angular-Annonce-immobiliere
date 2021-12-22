import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKeywordComponent } from './update-keyword.component';

describe('UpdateKeywordComponent', () => {
  let component: UpdateKeywordComponent;
  let fixture: ComponentFixture<UpdateKeywordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateKeywordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
