import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { CreateEntrevistaDto } from './dto/create-entrevista.dto';
import { UpdateEntrevistaDto } from './dto/update-entrevista.dto';
import {Entrevista} from './entities/entrevista.entity';

  @Injectable()
export class EntrevistaService {
  constructor(
  @InjectRepository(Entrevista)
  private readonly entrevistaRepository: Repository<Entrevista>){}

 async create(createEntrevistaDto: CreateEntrevistaDto) {
   const entrevista = this.entrevistaRepository.create({
    name: createEntrevistaDto.name
   })
    return this.entrevistaRepository.save(entrevista);
  }

  findAll() {
    return this.entrevistaRepository.find();
  }

  async findOne(id: number) {
    return await this.entrevistaRepository.findOneOrFail({where: {id}}).catch( () => { throw new NotFoundException('Element not found')})
  }

  async update(id: number, updateEntrevistaDto: UpdateEntrevistaDto) {
    const entrevista = await this.entrevistaRepository.preload({
      id: id,
      name: updateEntrevistaDto.name
    })
    return  await this.entrevistaRepository.save(entrevista)
  }

  async remove(id: number) {
    const entrevista = await this.entrevistaRepository.findOneOrFail({where: {id}}).catch( () => { throw new NotFoundException('Element you want to delete not found')})
 
  return await this.entrevistaRepository.remove(entrevista) ;
  }
}
