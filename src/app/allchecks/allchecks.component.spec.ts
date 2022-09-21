import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllchecksComponent } from './allchecks.component';

describe('AllchecksComponent', () => {
  let component: AllchecksComponent;
  let fixture: ComponentFixture<AllchecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllchecksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllchecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
