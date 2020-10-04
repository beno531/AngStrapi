import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventshowcaseComponent } from './eventshowcase.component';

describe('EventshowcaseComponent', () => {
  let component: EventshowcaseComponent;
  let fixture: ComponentFixture<EventshowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventshowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventshowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
