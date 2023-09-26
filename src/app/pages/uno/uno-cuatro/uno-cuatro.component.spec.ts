import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnoCuatroComponent } from './uno-cuatro.component';

describe('UnoCuatroComponent', () => {
  let component: UnoCuatroComponent;
  let fixture: ComponentFixture<UnoCuatroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnoCuatroComponent]
    });
    fixture = TestBed.createComponent(UnoCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
