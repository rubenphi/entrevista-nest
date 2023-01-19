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
exports.PayloadsController = void 0;
const common_1 = require("@nestjs/common");
const payloads_service_1 = require("./payloads.service");
const create_payload_dto_1 = require("./dto/create-payload.dto");
const update_payload_dto_1 = require("./dto/update-payload.dto");
let PayloadsController = class PayloadsController {
    constructor(payloadsService) {
        this.payloadsService = payloadsService;
    }
    create(createPayloadDto) {
        return this.payloadsService.create(createPayloadDto);
    }
    findAll() {
        return this.payloadsService.findAll();
    }
    findOne(id) {
        return this.payloadsService.findOne(+id);
    }
    update(id, updatePayloadDto) {
        return this.payloadsService.update(+id, updatePayloadDto);
    }
    remove(id) {
        return this.payloadsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payload_dto_1.CreatePayloadDto]),
    __metadata("design:returntype", void 0)
], PayloadsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PayloadsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PayloadsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_payload_dto_1.UpdatePayloadDto]),
    __metadata("design:returntype", void 0)
], PayloadsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PayloadsController.prototype, "remove", null);
PayloadsController = __decorate([
    (0, common_1.Controller)('payloads'),
    __metadata("design:paramtypes", [payloads_service_1.PayloadsService])
], PayloadsController);
exports.PayloadsController = PayloadsController;
//# sourceMappingURL=payloads.controller.js.map