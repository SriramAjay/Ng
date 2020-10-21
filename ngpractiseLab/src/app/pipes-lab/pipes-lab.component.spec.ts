import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesLabComponent } from './pipes-lab.component';

describe('PipesLabComponent', () => {
  let component: PipesLabComponent;
  let fixture: ComponentFixture<PipesLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
