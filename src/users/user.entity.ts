import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column({ default: false })
  active: boolean;

  @Column()
  password: string;

  @Column()
  cost: number;

  @Column()
  nonce: string;
}
