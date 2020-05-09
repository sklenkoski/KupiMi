import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeNavBarComponent } from './recipe-nav-bar.component';

describe('RecipeNavBarComponent', () => {
  let component: RecipeNavBarComponent;
  let fixture: ComponentFixture<RecipeNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
