import { TestBed } from '@angular/core/testing';

import { AdminTareasService } from './admin-tareas.service';

describe('AdminTareasService', () => {
  let service: AdminTareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
