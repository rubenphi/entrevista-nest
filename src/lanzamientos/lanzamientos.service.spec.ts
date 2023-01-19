import { Test, TestingModule } from '@nestjs/testing';
import { LanzamientosService } from './lanzamientos.service';

describe('LanzamientosService', () => {
  let service: LanzamientosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanzamientosService],
    }).compile();

    service = module.get<LanzamientosService>(LanzamientosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
