import { Test, TestingModule } from '@nestjs/testing';
import { EntrevistaController } from './entrevista.controller';
import { EntrevistaService } from './entrevista.service';

describe('EntrevistaController', () => {
  let controller: EntrevistaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntrevistaController],
      providers: [EntrevistaService],
    }).compile();

    controller = module.get<EntrevistaController>(EntrevistaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
