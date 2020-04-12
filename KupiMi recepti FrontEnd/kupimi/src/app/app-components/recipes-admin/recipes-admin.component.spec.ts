import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesAdminComponent } from './recipes-admin.component';

describe('RecipesAdminComponent', () => {
  let component: RecipesAdminComponent;
  let fixture: ComponentFixture<RecipesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
