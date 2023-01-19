import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {LanzamientosModule} from './lanzamientos/lanzamientos.module';
import { PayloadsModule } from './payloads/payloads.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [LanzamientosModule, PayloadsModule
  ],
})
export class AppModule {}
