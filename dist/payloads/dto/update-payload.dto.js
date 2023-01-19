"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePayloadDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_payload_dto_1 = require("./create-payload.dto");
class UpdatePayloadDto extends (0, mapped_types_1.PartialType)(create_payload_dto_1.CreatePayloadDto) {
}
exports.UpdatePayloadDto = UpdatePayloadDto;
//# sourceMappingURL=update-payload.dto.js.map