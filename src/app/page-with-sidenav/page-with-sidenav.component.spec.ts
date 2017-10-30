import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithSidenavComponent } from './page-with-sidenav.component';

describe('PageWithSidenavComponent', () => {
  let component: PageWithSidenavComponent;
  let fixture: ComponentFixture<PageWithSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWithSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWithSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
