import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownOptionComponent } from './drop-down-option.component';

describe('DropDownOptionComponent', () => {
  let component: DropDownOptionComponent;
  let fixture: ComponentFixture<DropDownOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropDownOptionComponent]
    });
    fixture = TestBed.createComponent(DropDownOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
