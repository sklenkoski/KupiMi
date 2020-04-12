import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPromotionsComponent } from './box-promotions.component';

describe('BoxPromotionsComponent', () => {
  let component: BoxPromotionsComponent;
  let fixture: ComponentFixture<BoxPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
