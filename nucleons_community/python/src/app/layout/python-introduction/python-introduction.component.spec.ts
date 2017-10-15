import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonIntroductionComponent } from './python-introduction.component';

describe('PythonIntroductionComponent', () => {
  let component: PythonIntroductionComponent;
  let fixture: ComponentFixture<PythonIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
