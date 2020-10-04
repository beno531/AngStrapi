import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleshowcaseComponent } from './articleshowcase.component';

describe('ArticleshowcaseComponent', () => {
  let component: ArticleshowcaseComponent;
  let fixture: ComponentFixture<ArticleshowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleshowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleshowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
