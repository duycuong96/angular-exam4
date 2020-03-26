import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductEditComponent } from './manage-product-edit.component';

describe('ManageProductEditComponent', () => {
  let component: ManageProductEditComponent;
  let fixture: ComponentFixture<ManageProductEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProductEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
