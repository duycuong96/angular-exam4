import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductAddComponent } from './manage-product-add.component';

describe('ManageProductAddComponent', () => {
  let component: ManageProductAddComponent;
  let fixture: ComponentFixture<ManageProductAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProductAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
