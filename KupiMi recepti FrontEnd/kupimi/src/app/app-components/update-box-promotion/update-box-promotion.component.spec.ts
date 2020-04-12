import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBoxPromotionComponent } from './update-box-promotion.component';

describe('UpdateBoxPromotionComponent', () => {
  let component: UpdateBoxPromotionComponent;
  let fixture: ComponentFixture<UpdateBoxPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBoxPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBoxPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
