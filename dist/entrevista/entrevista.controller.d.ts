import { EntrevistaService } from './entrevista.service';
import { CreateEntrevistaDto } from './dto/create-entrevista.dto';
import { UpdateEntrevistaDto } from './dto/update-entrevista.dto';
export declare class EntrevistaController {
    private readonly entrevistaService;
    constructor(entrevistaService: EntrevistaService);
    create(createEntrevistaDto: CreateEntrevistaDto): Promise<import("./entities/entrevista.entity").Entrevista>;
    findAll(): Promise<import("./entities/entrevista.entity").Entrevista[]>;
    findOne(id: string): Promise<import("./entities/entrevista.entity").Entrevista>;
    update(id: string, updateEntrevistaDto: UpdateEntrevistaDto): Promise<import("./entities/entrevista.entity").Entrevista>;
    remove(id: string): Promise<import("./entities/entrevista.entity").Entrevista>;
}
