import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedLoopComComponent } from './nested-loop-com.component';

describe('NestedLoopComComponent', () => {
  let component: NestedLoopComComponent;
  let fixture: ComponentFixture<NestedLoopComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedLoopComComponent]
    });
    fixture = TestBed.createComponent(NestedLoopComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
