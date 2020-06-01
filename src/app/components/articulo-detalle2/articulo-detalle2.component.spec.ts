import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloDetalle2Component } from './articulo-detalle2.component';

describe('ArticuloDetalle2Component', () => {
  let component: ArticuloDetalle2Component;
  let fixture: ComponentFixture<ArticuloDetalle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloDetalle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloDetalle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
