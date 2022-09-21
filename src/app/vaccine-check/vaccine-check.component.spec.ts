import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineCheckComponent } from './vaccine-check.component';

describe('VaccineCheckComponent', () => {
  let component: VaccineCheckComponent;
  let fixture: ComponentFixture<VaccineCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccineCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
