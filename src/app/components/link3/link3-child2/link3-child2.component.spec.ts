import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link3Child2Component } from './link3-child2.component';

describe('Link3Child2Component', () => {
  let component: Link3Child2Component;
  let fixture: ComponentFixture<Link3Child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link3Child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link3Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
