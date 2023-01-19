import { LanzamientosService } from './lanzamientos.service';
import { CreateLanzamientoDto } from './dto/create-lanzamiento.dto';
import { UpdateLanzamientoDto } from './dto/update-lanzamiento.dto';
export declare class LanzamientosController {
    private readonly lanzamientosService;
    constructor(lanzamientosService: LanzamientosService);
    create(createLanzamientoDto: CreateLanzamientoDto): string;
    findAll(): Promise<any[]>;
    findOne(id: string): string;
    update(id: string, updateLanzamientoDto: UpdateLanzamientoDto): string;
    remove(id: string): string;
}
