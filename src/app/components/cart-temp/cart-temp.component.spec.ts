import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTempComponent } from './cart-temp.component';

describe('CartTempComponent', () => {
  let component: CartTempComponent;
  let fixture: ComponentFixture<CartTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartTempComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
