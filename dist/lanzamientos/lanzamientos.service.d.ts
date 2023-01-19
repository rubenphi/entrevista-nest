import { CreateLanzamientoDto } from './dto/create-lanzamiento.dto';
import { UpdateLanzamientoDto } from './dto/update-lanzamiento.dto';
export declare class LanzamientosService {
    create(createLanzamientoDto: CreateLanzamientoDto): string;
    findAll(): Promise<any[]>;
    findOne(id: number): string;
    update(id: number, updateLanzamientoDto: UpdateLanzamientoDto): string;
    remove(id: number): string;
}
