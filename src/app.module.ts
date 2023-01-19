import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntrevistaModule } from './entrevista/entrevista.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [EntrevistaModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'ruben',
      database: 'entrevista',
      password: 'japon93',
      entities: ['dist/**/**/*.entity{.js,.ts}'],
      synchronize: true
    })
  ],
})
export class AppModule {}
