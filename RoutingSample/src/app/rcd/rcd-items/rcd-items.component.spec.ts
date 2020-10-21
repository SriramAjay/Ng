import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcdItemsComponent } from './rcd-items.component';

describe('RcdItemsComponent', () => {
  let component: RcdItemsComponent;
  let fixture: ComponentFixture<RcdItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcdItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcdItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
