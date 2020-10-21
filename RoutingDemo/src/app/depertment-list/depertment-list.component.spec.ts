import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepertmentListComponent } from './depertment-list.component';

describe('DepertmentListComponent', () => {
  let component: DepertmentListComponent;
  let fixture: ComponentFixture<DepertmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepertmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepertmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
