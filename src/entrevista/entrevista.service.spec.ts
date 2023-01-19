import { Test, TestingModule } from '@nestjs/testing';
import { EntrevistaService } from './entrevista.service';

describe('EntrevistaService', () => {
  let service: EntrevistaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntrevistaService],
    }).compile();

    service = module.get<EntrevistaService>(EntrevistaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
