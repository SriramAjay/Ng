import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclecountHeaderComponent } from './cyclecount-header.component';

describe('CyclecountHeaderComponent', () => {
  let component: CyclecountHeaderComponent;
  let fixture: ComponentFixture<CyclecountHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclecountHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclecountHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
