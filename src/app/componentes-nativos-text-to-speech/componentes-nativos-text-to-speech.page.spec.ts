import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesNativosTextToSpeechPage } from './componentes-nativos-text-to-speech.page';

describe('ComponentesNativosTextToSpeechPage', () => {
  let component: ComponentesNativosTextToSpeechPage;
  let fixture: ComponentFixture<ComponentesNativosTextToSpeechPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesNativosTextToSpeechPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesNativosTextToSpeechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
