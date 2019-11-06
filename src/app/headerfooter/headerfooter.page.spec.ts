import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderfooterPage } from './headerfooter.page';

describe('HeaderfooterPage', () => {
  let component: HeaderfooterPage;
  let fixture: ComponentFixture<HeaderfooterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderfooterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderfooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
