import { TestBed } from '@angular/core/testing';

import { CreatedProjectsService } from './created-projects.service';

describe('CreatedProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatedProjectsService = TestBed.get(CreatedProjectsService);
    expect(service).toBeTruthy();
  });
});
