import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link3Child1Component } from './link3-child1.component';

describe('Link3Child1Component', () => {
  let component: Link3Child1Component;
  let fixture: ComponentFixture<Link3Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link3Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link3Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
