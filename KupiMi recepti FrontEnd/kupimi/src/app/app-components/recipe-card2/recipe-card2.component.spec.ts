import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCard2Component } from './recipe-card2.component';

describe('RecipeCard2Component', () => {
  let component: RecipeCard2Component;
  let fixture: ComponentFixture<RecipeCard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
