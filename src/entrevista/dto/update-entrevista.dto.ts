import {IsString} from "class-validator";

export class UpdateEntrevistaDto {
  @IsString()
  readonly name: string
}
