import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNoneComponent } from './display-none.component';

describe('DisplayNoneComponent', () => {
  let component: DisplayNoneComponent;
  let fixture: ComponentFixture<DisplayNoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayNoneComponent]
    });
    fixture = TestBed.createComponent(DisplayNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
