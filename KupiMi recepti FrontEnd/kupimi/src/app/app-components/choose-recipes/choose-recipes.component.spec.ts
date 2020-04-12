import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseRecipesComponent } from './choose-recipes.component';

describe('ChooseRecipesComponent', () => {
  let component: ChooseRecipesComponent;
  let fixture: ComponentFixture<ChooseRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
