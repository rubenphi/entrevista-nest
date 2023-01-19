"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntrevistaModule = void 0;
const common_1 = require("@nestjs/common");
const entrevista_service_1 = require("./entrevista.service");
const entrevista_controller_1 = require("./entrevista.controller");
const typeorm_1 = require("@nestjs/typeorm");
const entrevista_entity_1 = require("./entities/entrevista.entity");
let EntrevistaModule = class EntrevistaModule {
};
EntrevistaModule = __decorate([
    (0, common_1.Module)({
        controllers: [entrevista_controller_1.EntrevistaController],
        providers: [entrevista_service_1.EntrevistaService],
        imports: [typeorm_1.TypeOrmModule.forFeature([entrevista_entity_1.Entrevista])]
    })
], EntrevistaModule);
exports.EntrevistaModule = EntrevistaModule;
//# sourceMappingURL=entrevista.module.js.map