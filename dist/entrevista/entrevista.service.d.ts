import { Repository } from 'typeorm';
import { CreateEntrevistaDto } from './dto/create-entrevista.dto';
import { UpdateEntrevistaDto } from './dto/update-entrevista.dto';
import { Entrevista } from './entities/entrevista.entity';
export declare class EntrevistaService {
    private readonly entrevistaRepository;
    constructor(entrevistaRepository: Repository<Entrevista>);
    create(createEntrevistaDto: CreateEntrevistaDto): Promise<Entrevista>;
    findAll(): Promise<Entrevista[]>;
    findOne(id: number): Promise<Entrevista>;
    update(id: number, updateEntrevistaDto: UpdateEntrevistaDto): Promise<Entrevista>;
    remove(id: number): Promise<Entrevista>;
}
