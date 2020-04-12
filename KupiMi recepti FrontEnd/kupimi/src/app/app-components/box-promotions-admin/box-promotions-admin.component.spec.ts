import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPromotionsAdminComponent } from './box-promotions-admin.component';

describe('BoxPromotionsAdminComponent', () => {
  let component: BoxPromotionsAdminComponent;
  let fixture: ComponentFixture<BoxPromotionsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxPromotionsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPromotionsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
