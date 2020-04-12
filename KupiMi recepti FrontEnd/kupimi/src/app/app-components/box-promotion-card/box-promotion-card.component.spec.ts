import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPromotionCardComponent } from './box-promotion-card.component';

describe('BoxPromotionCardComponent', () => {
  let component: BoxPromotionCardComponent;
  let fixture: ComponentFixture<BoxPromotionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxPromotionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPromotionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
