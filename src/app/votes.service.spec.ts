import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { VotesService } from './votes.service';

describe('VotesService', () => {
  let service: VotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(VotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
