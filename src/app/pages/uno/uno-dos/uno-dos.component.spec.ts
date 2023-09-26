import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnoDosComponent } from './uno-dos.component';

describe('UnoDosComponent', () => {
  let component: UnoDosComponent;
  let fixture: ComponentFixture<UnoDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnoDosComponent]
    });
    fixture = TestBed.createComponent(UnoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
