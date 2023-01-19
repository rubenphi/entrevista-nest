import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Entrevista {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({nullable: false})
  name: string;

}
