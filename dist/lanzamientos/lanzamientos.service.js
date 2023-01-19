"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanzamientosService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let LanzamientosService = class LanzamientosService {
    create(createLanzamientoDto) {
        return 'This action adds a new lanzamiento';
    }
    async findAll() {
        const lanzamientosBase = await axios_1.default.get('https://api.spacexdata.com/v4/landpads');
        const lanzamientos = [];
        let lanzamiento;
        lanzamientosBase.data.map((lanzamientoBase) => {
            lanzamiento = {
                nombre: lanzamientoBase.name,
                estado: lanzamientoBase.status,
                tipo: lanzamientoBase.type,
                localidad: lanzamientoBase.locality,
                lanzamientos: lanzamientoBase.launches,
            };
            lanzamientos.push(lanzamiento);
        });
        return lanzamientos;
    }
    findOne(id) {
        return `This action returns a #${id} lanzamiento`;
    }
    update(id, updateLanzamientoDto) {
        return `This action updates a #${id} lanzamiento`;
    }
    remove(id) {
        return `This action removes a #${id} lanzamiento`;
    }
};
LanzamientosService = __decorate([
    (0, common_1.Injectable)()
], LanzamientosService);
exports.LanzamientosService = LanzamientosService;
//# sourceMappingURL=lanzamientos.service.js.map