import { PayloadsService } from './payloads.service';
import { CreatePayloadDto } from './dto/create-payload.dto';
import { UpdatePayloadDto } from './dto/update-payload.dto';
export declare class PayloadsController {
    private readonly payloadsService;
    constructor(payloadsService: PayloadsService);
    create(createPayloadDto: CreatePayloadDto): string;
    findAll(): Promise<any>;
    findOne(id: string): string;
    update(id: string, updatePayloadDto: UpdatePayloadDto): string;
    remove(id: string): string;
}
