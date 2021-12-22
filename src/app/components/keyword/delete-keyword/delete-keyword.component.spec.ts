import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteKeywordComponent } from './delete-keyword.component';

describe('DeleteKeywordComponent', () => {
  let component: DeleteKeywordComponent;
  let fixture: ComponentFixture<DeleteKeywordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteKeywordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
