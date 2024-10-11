import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MedicoService } from './medico.service';


describe('MedicoService', () => {
  let service: MedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(MedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
