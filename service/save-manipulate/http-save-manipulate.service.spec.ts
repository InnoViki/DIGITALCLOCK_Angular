import { TestBed } from '@angular/core/testing';

import { HttpSaveManipulateService } from './http-save-manipulate.service';

describe('HttpSaveManipulateService', () => {
  let service: HttpSaveManipulateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSaveManipulateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
