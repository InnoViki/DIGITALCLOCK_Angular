import { TestBed } from '@angular/core/testing';

import { RoutingLogicService } from './routing-logic.service';

describe('RoutingLogicService', () => {
  let service: RoutingLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
