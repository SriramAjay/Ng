import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclecountItemsComponent } from './cyclecount-items.component';

describe('CyclecountItemsComponent', () => {
  let component: CyclecountItemsComponent;
  let fixture: ComponentFixture<CyclecountItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclecountItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclecountItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
