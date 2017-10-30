import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithSidenav1Component } from './page-with-sidenav1.component';

describe('PageWithSidenav1Component', () => {
  let component: PageWithSidenav1Component;
  let fixture: ComponentFixture<PageWithSidenav1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWithSidenav1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWithSidenav1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
