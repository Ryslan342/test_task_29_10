import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceObjectComponent } from './price-object.component';

describe('PriceObjectComponent', () => {
  let component: PriceObjectComponent;
  let fixture: ComponentFixture<PriceObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceObjectComponent]
    });
    fixture = TestBed.createComponent(PriceObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
