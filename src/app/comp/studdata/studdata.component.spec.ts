import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuddataComponent } from './studdata.component';

describe('StuddataComponent', () => {
  let component: StuddataComponent;
  let fixture: ComponentFixture<StuddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuddataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
