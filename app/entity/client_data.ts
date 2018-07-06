import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Client_Data {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 100
  })
  name!: string;

  @Column()
  logo_id?: number;

  @Column()
  status!: string;
}
