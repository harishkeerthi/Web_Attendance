import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirecttostudentComponent } from './redirecttostudent.component';

describe('RedirecttostudentComponent', () => {
  let component: RedirecttostudentComponent;
  let fixture: ComponentFixture<RedirecttostudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirecttostudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirecttostudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
