import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeedbackComponent } from './product-feedback.component';

describe('ProductFeedbackComponent', () => {
  let component: ProductFeedbackComponent;
  let fixture: ComponentFixture<ProductFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFeedbackComponent]
    });
    fixture = TestBed.createComponent(ProductFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
