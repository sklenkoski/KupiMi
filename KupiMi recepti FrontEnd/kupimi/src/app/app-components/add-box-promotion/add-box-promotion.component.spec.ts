import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoxPromotionComponent } from './add-box-promotion.component';

describe('AddBoxPromotionComponent', () => {
  let component: AddBoxPromotionComponent;
  let fixture: ComponentFixture<AddBoxPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBoxPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoxPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
