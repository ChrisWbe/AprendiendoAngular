import { TestBed } from '@angular/core/testing';

import { JsonPlaceHolderService } from './json-place-holder.service';

describe('JsonPlaceHolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonPlaceHolderService = TestBed.get(JsonPlaceHolderService);
    expect(service).toBeTruthy();
  });
});
