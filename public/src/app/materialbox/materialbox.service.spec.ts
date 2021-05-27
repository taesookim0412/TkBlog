import { TestBed } from '@angular/core/testing';

import { MaterialboxService } from './materialbox.service';

describe('MaterialboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialboxService = TestBed.get(MaterialboxService);
    expect(service).toBeTruthy();
  });
});
