import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanzamientosService } from './lanzamientos.service';
import { CreateLanzamientoDto } from './dto/create-lanzamiento.dto';
import { UpdateLanzamientoDto } from './dto/update-lanzamiento.dto';

@Controller('lanzamientos')
export class LanzamientosController {
  constructor(private readonly lanzamientosService: LanzamientosService) {}

  @Post()
  create(@Body() createLanzamientoDto: CreateLanzamientoDto) {
    return this.lanzamientosService.create(createLanzamientoDto);
  }

  @Get()
  findAll() {
    return this.lanzamientosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lanzamientosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanzamientoDto: UpdateLanzamientoDto) {
    return this.lanzamientosService.update(+id, updateLanzamientoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lanzamientosService.remove(+id);
  }
}
