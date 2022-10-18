import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ArtistsService } from './artists.service';

describe('ArtistsService', () => {
  let service: ArtistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ArtistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
