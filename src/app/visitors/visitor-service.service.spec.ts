import { TestBed, inject } from '@angular/core/testing';

import { VisitorServiceService } from './visitor-service.service';

describe('VisitorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitorServiceService]
    });
  });

  it('should be created', inject([VisitorServiceService], (service: VisitorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
