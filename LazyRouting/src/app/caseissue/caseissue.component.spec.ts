import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseissueComponent } from './caseissue.component';

describe('CaseissueComponent', () => {
  let component: CaseissueComponent;
  let fixture: ComponentFixture<CaseissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
