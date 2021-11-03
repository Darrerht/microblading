import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioUComponent } from './usuario-u.component';

describe('UsuarioUComponent', () => {
  let component: UsuarioUComponent;
  let fixture: ComponentFixture<UsuarioUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
