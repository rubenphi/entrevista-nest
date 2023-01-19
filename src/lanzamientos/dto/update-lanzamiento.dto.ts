import { PartialType } from '@nestjs/mapped-types';
import { CreateLanzamientoDto } from './create-lanzamiento.dto';

export class UpdateLanzamientoDto extends PartialType(CreateLanzamientoDto) {}
