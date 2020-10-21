import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclecountComponent } from './cyclecount.component';

describe('CyclecountComponent', () => {
  let component: CyclecountComponent;
  let fixture: ComponentFixture<CyclecountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclecountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
