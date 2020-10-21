import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcdComponent } from './rcd.component';

describe('RcdComponent', () => {
  let component: RcdComponent;
  let fixture: ComponentFixture<RcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
