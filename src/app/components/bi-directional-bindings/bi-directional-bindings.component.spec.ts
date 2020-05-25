import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiDirectionalBindingsComponent } from './bi-directional-bindings.component';

describe('BiDirectionalBindingsComponent', () => {
  let component: BiDirectionalBindingsComponent;
  let fixture: ComponentFixture<BiDirectionalBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiDirectionalBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiDirectionalBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
