import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDComponent } from './usuario-d.component';

describe('UsuarioDComponent', () => {
  let component: UsuarioDComponent;
  let fixture: ComponentFixture<UsuarioDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
