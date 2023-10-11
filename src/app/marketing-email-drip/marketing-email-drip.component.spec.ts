import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingEmailDripComponent } from './marketing-email-drip.component';

describe('MarketingEmailDripComponent', () => {
  let component: MarketingEmailDripComponent;
  let fixture: ComponentFixture<MarketingEmailDripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingEmailDripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingEmailDripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
