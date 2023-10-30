import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastInfoItemComponent } from './fast-info-item.component';

describe('FastInfoItemComponent', () => {
  let component: FastInfoItemComponent;
  let fixture: ComponentFixture<FastInfoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FastInfoItemComponent]
    });
    fixture = TestBed.createComponent(FastInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
