import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElseIdComComponent } from './else-id-com.component';

describe('ElseIdComComponent', () => {
  let component: ElseIdComComponent;
  let fixture: ComponentFixture<ElseIdComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElseIdComComponent]
    });
    fixture = TestBed.createComponent(ElseIdComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
