import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingComComponent } from './property-binding-com.component';

describe('PropertyBindingComComponent', () => {
  let component: PropertyBindingComComponent;
  let fixture: ComponentFixture<PropertyBindingComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyBindingComComponent]
    });
    fixture = TestBed.createComponent(PropertyBindingComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
