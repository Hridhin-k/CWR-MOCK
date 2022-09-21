import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartlyVaccinatedComponent } from './partly-vaccinated.component';

describe('PartlyVaccinatedComponent', () => {
  let component: PartlyVaccinatedComponent;
  let fixture: ComponentFixture<PartlyVaccinatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartlyVaccinatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartlyVaccinatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
