import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepertmentContactComponent } from './depertment-contact.component';

describe('DepertmentContactComponent', () => {
  let component: DepertmentContactComponent;
  let fixture: ComponentFixture<DepertmentContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepertmentContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepertmentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
