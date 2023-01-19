import {IsString} from "class-validator";

export class CreateEntrevistaDto {
  @IsString()
  readonly name: string
}
