import { TestBed, async, inject } from '@angular/core/testing';

import { EmployeeResolveGuard } from './employee-resolve.guard';

describe('EmployeeResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeResolveGuard]
    });
  });

  it('should ...', inject([EmployeeResolveGuard], (guard: EmployeeResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
