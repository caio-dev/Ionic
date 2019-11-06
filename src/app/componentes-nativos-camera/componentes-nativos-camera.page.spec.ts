import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesNativosCameraPage } from './componentes-nativos-camera.page';

describe('ComponentesNativosCameraPage', () => {
  let component: ComponentesNativosCameraPage;
  let fixture: ComponentFixture<ComponentesNativosCameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesNativosCameraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesNativosCameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
