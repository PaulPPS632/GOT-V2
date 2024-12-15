import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCapComponent } from './cart-cap.component';

describe('CartCapComponent', () => {
  let component: CartCapComponent;
  let fixture: ComponentFixture<CartCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartCapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
