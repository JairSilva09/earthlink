import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotColorComponent } from './dotcolor.component';

describe('DotColorComponent', () => {
  let component: DotColorComponent;
  let fixture: ComponentFixture<DotColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
