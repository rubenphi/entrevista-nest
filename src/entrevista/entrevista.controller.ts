import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntrevistaService } from './entrevista.service';
import { CreateEntrevistaDto } from './dto/create-entrevista.dto';
import { UpdateEntrevistaDto } from './dto/update-entrevista.dto';

@Controller('entrevista')
export class EntrevistaController {
  constructor(private readonly entrevistaService: EntrevistaService) {}

  @Post()
  create(@Body() createEntrevistaDto: CreateEntrevistaDto) {
    return this.entrevistaService.create(createEntrevistaDto);
  }

  @Get()
  findAll() {
    return this.entrevistaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entrevistaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntrevistaDto: UpdateEntrevistaDto) {
    return this.entrevistaService.update(+id, updateEntrevistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entrevistaService.remove(+id);
  }
}
