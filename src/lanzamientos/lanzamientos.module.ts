import { Module } from '@nestjs/common';
import { LanzamientosService } from './lanzamientos.service';
import { LanzamientosController } from './lanzamientos.controller';

@Module({
  controllers: [LanzamientosController],
  providers: [LanzamientosService]
})
export class LanzamientosModule {}
