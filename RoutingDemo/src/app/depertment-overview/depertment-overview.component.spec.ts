import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepertmentOverviewComponent } from './depertment-overview.component';

describe('DepertmentOverviewComponent', () => {
  let component: DepertmentOverviewComponent;
  let fixture: ComponentFixture<DepertmentOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepertmentOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepertmentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
