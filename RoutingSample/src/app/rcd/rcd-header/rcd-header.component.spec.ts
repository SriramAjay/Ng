import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcdHeaderComponent } from './rcd-header.component';

describe('RcdHeaderComponent', () => {
  let component: RcdHeaderComponent;
  let fixture: ComponentFixture<RcdHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcdHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcdHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
