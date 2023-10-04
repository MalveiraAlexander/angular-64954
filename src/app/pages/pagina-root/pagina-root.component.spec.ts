import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRootComponent } from './pagina-root.component';

describe('PaginaRootComponent', () => {
  let component: PaginaRootComponent;
  let fixture: ComponentFixture<PaginaRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaRootComponent]
    });
    fixture = TestBed.createComponent(PaginaRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
