import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexChartsComponent } from './apex-charts.component';

describe('ApexChartsComponent', () => {
  let component: ApexChartsComponent;
  let fixture: ComponentFixture<ApexChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
