import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {stringify} from 'querystring';
import { CreateLanzamientoDto } from './dto/create-lanzamiento.dto';
import { UpdateLanzamientoDto } from './dto/update-lanzamiento.dto';
import { Lanzamiento } from './entities/lanzamiento.entity';

@Injectable()
export class LanzamientosService {
  create(createLanzamientoDto: CreateLanzamientoDto) {
    return 'This action adds a new lanzamiento';
  }

  async findAll() {
    const lanzamientosBase = await axios.get('https://api.spacexdata.com/v4/landpads'); 
    const lanzamientos:any[] = [];
    let lanzamiento: Lanzamiento;
    lanzamientosBase.data.map((lanzamientoBase) => {
      lanzamiento = {
        nombre: lanzamientoBase.name,
        estado: lanzamientoBase.status,
        tipo: lanzamientoBase.type,
        localidad: lanzamientoBase.locality,
        lanzamientos: lanzamientoBase.launches,
      };
      lanzamientos.push(lanzamiento);
    });
   
    return lanzamientos; 
  }

  findOne(id: number) {
    return `This action returns a #${id} lanzamiento`;
  }

  update(id: number, updateLanzamientoDto: UpdateLanzamientoDto) {
    return `This action updates a #${id} lanzamiento`;
  }

  remove(id: number) {
    return `This action removes a #${id} lanzamiento`;
  }
}
