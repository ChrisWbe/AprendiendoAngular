import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDataPlaceHolderComponent } from './agregar-data-place-holder.component';

describe('AgregarDataPlaceHolderComponent', () => {
  let component: AgregarDataPlaceHolderComponent;
  let fixture: ComponentFixture<AgregarDataPlaceHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarDataPlaceHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDataPlaceHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
