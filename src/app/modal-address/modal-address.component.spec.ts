import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddressComponent } from './modal-address.component';

describe('ModalAddressComponent', () => {
  let component: ModalAddressComponent;
  let fixture: ComponentFixture<ModalAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddressComponent]
    });
    fixture = TestBed.createComponent(ModalAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});