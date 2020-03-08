import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirecttofacultyComponent } from './redirecttofaculty.component';

describe('RedirecttofacultyComponent', () => {
  let component: RedirecttofacultyComponent;
  let fixture: ComponentFixture<RedirecttofacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirecttofacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirecttofacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
