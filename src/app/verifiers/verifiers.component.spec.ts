import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiersComponent } from './verifiers.component';

describe('VerifiersComponent', () => {
  let component: VerifiersComponent;
  let fixture: ComponentFixture<VerifiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
