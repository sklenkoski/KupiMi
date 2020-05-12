import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchDinnerComponent } from './lunch-dinner.component';

describe('LunchDinnerComponent', () => {
  let component: LunchDinnerComponent;
  let fixture: ComponentFixture<LunchDinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchDinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
