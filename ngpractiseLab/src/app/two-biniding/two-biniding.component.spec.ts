import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBinidingComponent } from './two-biniding.component';

describe('TwoBinidingComponent', () => {
  let component: TwoBinidingComponent;
  let fixture: ComponentFixture<TwoBinidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoBinidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoBinidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
