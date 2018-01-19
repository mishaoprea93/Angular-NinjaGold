import { TestBed, inject } from '@angular/core/testing';

import { GoldManagmentService } from './gold-managment.service';

describe('GoldManagmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoldManagmentService]
    });
  });

  it('should be created', inject([GoldManagmentService], (service: GoldManagmentService) => {
    expect(service).toBeTruthy();
  }));
});
