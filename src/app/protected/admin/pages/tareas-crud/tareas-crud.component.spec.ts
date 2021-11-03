import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasCrudComponent } from './tareas-crud.component';

describe('TareasCrudComponent', () => {
  let component: TareasCrudComponent;
  let fixture: ComponentFixture<TareasCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
