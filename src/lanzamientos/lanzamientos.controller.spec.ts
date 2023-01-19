import { Test, TestingModule } from '@nestjs/testing';
import { LanzamientosController } from './lanzamientos.controller';
import { LanzamientosService } from './lanzamientos.service';

describe('LanzamientosController', () => {
  let controller: LanzamientosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanzamientosController],
      providers: [LanzamientosService],
    }).compile();

    controller = module.get<LanzamientosController>(LanzamientosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
