import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseComComponent } from './if-else-com.component';

describe('IfElseComComponent', () => {
  let component: IfElseComComponent;
  let fixture: ComponentFixture<IfElseComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfElseComComponent]
    });
    fixture = TestBed.createComponent(IfElseComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
