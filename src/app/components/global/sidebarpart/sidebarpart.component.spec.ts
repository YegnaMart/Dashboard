import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarpartComponent } from './sidebarpart.component';

describe('SidebarpartComponent', () => {
  let component: SidebarpartComponent;
  let fixture: ComponentFixture<SidebarpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
