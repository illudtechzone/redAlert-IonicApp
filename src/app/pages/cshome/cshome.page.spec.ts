import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CshomePage } from './cshome.page';

describe('CshomePage', () => {
  let component: CshomePage;
  let fixture: ComponentFixture<CshomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CshomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CshomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
