"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadsModule = void 0;
const common_1 = require("@nestjs/common");
const payloads_service_1 = require("./payloads.service");
const payloads_controller_1 = require("./payloads.controller");
let PayloadsModule = class PayloadsModule {
};
PayloadsModule = __decorate([
    (0, common_1.Module)({
        controllers: [payloads_controller_1.PayloadsController],
        providers: [payloads_service_1.PayloadsService]
    })
], PayloadsModule);
exports.PayloadsModule = PayloadsModule;
//# sourceMappingURL=payloads.module.js.map