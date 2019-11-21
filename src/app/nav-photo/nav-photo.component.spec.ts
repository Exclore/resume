import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPhotoComponent } from './nav-photo.component';

describe('NavPhotoComponent', () => {
  let component: NavPhotoComponent;
  let fixture: ComponentFixture<NavPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
