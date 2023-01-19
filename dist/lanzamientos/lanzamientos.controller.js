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
exports.LanzamientosController = void 0;
const common_1 = require("@nestjs/common");
const lanzamientos_service_1 = require("./lanzamientos.service");
const create_lanzamiento_dto_1 = require("./dto/create-lanzamiento.dto");
const update_lanzamiento_dto_1 = require("./dto/update-lanzamiento.dto");
let LanzamientosController = class LanzamientosController {
    constructor(lanzamientosService) {
        this.lanzamientosService = lanzamientosService;
    }
    create(createLanzamientoDto) {
        return this.lanzamientosService.create(createLanzamientoDto);
    }
    findAll() {
        return this.lanzamientosService.findAll();
    }
    findOne(id) {
        return this.lanzamientosService.findOne(+id);
    }
    update(id, updateLanzamientoDto) {
        return this.lanzamientosService.update(+id, updateLanzamientoDto);
    }
    remove(id) {
        return this.lanzamientosService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lanzamiento_dto_1.CreateLanzamientoDto]),
    __metadata("design:returntype", void 0)
], LanzamientosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LanzamientosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LanzamientosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lanzamiento_dto_1.UpdateLanzamientoDto]),
    __metadata("design:returntype", void 0)
], LanzamientosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LanzamientosController.prototype, "remove", null);
LanzamientosController = __decorate([
    (0, common_1.Controller)('lanzamientos'),
    __metadata("design:paramtypes", [lanzamientos_service_1.LanzamientosService])
], LanzamientosController);
exports.LanzamientosController = LanzamientosController;
//# sourceMappingURL=lanzamientos.controller.js.map