import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudetailsComponent } from './studetails.component';

describe('StudetailsComponent', () => {
  let component: StudetailsComponent;
  let fixture: ComponentFixture<StudetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
