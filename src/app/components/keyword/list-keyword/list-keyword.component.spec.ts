import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKeywordComponent } from './list-keyword.component';

describe('ListKeywordComponent', () => {
  let component: ListKeywordComponent;
  let fixture: ComponentFixture<ListKeywordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListKeywordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
