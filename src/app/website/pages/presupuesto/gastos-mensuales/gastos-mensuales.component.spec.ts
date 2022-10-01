import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosMensualesComponent } from './gastos-mensuales.component';

describe('GastosMensualesComponent', () => {
  let component: GastosMensualesComponent;
  let fixture: ComponentFixture<GastosMensualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastosMensualesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastosMensualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
