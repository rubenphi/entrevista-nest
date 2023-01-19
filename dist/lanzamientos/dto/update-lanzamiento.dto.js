"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLanzamientoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_lanzamiento_dto_1 = require("./create-lanzamiento.dto");
class UpdateLanzamientoDto extends (0, mapped_types_1.PartialType)(create_lanzamiento_dto_1.CreateLanzamientoDto) {
}
exports.UpdateLanzamientoDto = UpdateLanzamientoDto;
//# sourceMappingURL=update-lanzamiento.dto.js.map