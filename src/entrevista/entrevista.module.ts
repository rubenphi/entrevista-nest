import { Module } from '@nestjs/common';
import { EntrevistaService } from './entrevista.service';
import { EntrevistaController } from './entrevista.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Entrevista} from './entities/entrevista.entity';

@Module({
  controllers: [EntrevistaController],
  providers: [EntrevistaService],
  imports: [TypeOrmModule.forFeature([Entrevista])]
})
export class EntrevistaModule {}
