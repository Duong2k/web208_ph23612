import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselayoutComponent } from './baselayout.component';

describe('BaselayoutComponent', () => {
  let component: BaselayoutComponent;
  let fixture: ComponentFixture<BaselayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaselayoutComponent]
    });
    fixture = TestBed.createComponent(BaselayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
