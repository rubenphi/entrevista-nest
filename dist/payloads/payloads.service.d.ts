import { CreatePayloadDto } from './dto/create-payload.dto';
import { UpdatePayloadDto } from './dto/update-payload.dto';
export declare class PayloadsService {
    create(createPayloadDto: CreatePayloadDto): string;
    findAll(): Promise<any>;
    findOne(id: number): string;
    update(id: number, updatePayloadDto: UpdatePayloadDto): string;
    remove(id: number): string;
}
