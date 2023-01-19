"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntrevistaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entrevista_entity_1 = require("./entities/entrevista.entity");
let EntrevistaService = class EntrevistaService {
    constructor(entrevistaRepository) {
        this.entrevistaRepository = entrevistaRepository;
    }
    async create(createEntrevistaDto) {
        const entrevista = this.entrevistaRepository.create({
            name: createEntrevistaDto.name
        });
        return this.entrevistaRepository.save(entrevista);
    }
    findAll() {
        return this.entrevistaRepository.find();
    }
    async findOne(id) {
        return await this.entrevistaRepository.findOneOrFail({ where: { id } }).catch(() => { throw new common_1.NotFoundException('Element not found'); });
    }
    async update(id, updateEntrevistaDto) {
        const entrevista = await this.entrevistaRepository.preload({
            id: id,
            name: updateEntrevistaDto.name
        });
        return await this.entrevistaRepository.save(entrevista);
    }
    async remove(id) {
        const entrevista = await this.entrevistaRepository.findOneOrFail({ where: { id } }).catch(() => { throw new common_1.NotFoundException('Element you want to delete not found'); });
        return await this.entrevistaRepository.remove(entrevista);
    }
};
EntrevistaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entrevista_entity_1.Entrevista)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EntrevistaService);
exports.EntrevistaService = EntrevistaService;
//# sourceMappingURL=entrevista.service.js.map