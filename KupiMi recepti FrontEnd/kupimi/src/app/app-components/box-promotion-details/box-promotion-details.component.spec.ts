import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPromotionDetailsComponent } from './box-promotion-details.component';

describe('BoxPromotionDetailsComponent', () => {
  let component: BoxPromotionDetailsComponent;
  let fixture: ComponentFixture<BoxPromotionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxPromotionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPromotionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
