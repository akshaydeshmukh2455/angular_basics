import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingComComponent } from './two-way-binding-com.component';

describe('TwoWayBindingComComponent', () => {
  let component: TwoWayBindingComComponent;
  let fixture: ComponentFixture<TwoWayBindingComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWayBindingComComponent]
    });
    fixture = TestBed.createComponent(TwoWayBindingComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
