import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnoTresComponent } from './uno-tres.component';

describe('UnoTresComponent', () => {
  let component: UnoTresComponent;
  let fixture: ComponentFixture<UnoTresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnoTresComponent]
    });
    fixture = TestBed.createComponent(UnoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
