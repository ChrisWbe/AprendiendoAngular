import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingsComponent } from './property-bindings.component';

describe('PropertyBindingsComponent', () => {
  let component: PropertyBindingsComponent;
  let fixture: ComponentFixture<PropertyBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
