import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiviesLabComponent } from './structural-directivies-lab.component';

describe('StructuralDirectiviesLabComponent', () => {
  let component: StructuralDirectiviesLabComponent;
  let fixture: ComponentFixture<StructuralDirectiviesLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralDirectiviesLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiviesLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
