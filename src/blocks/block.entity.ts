import {
  Entity,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { UserEntity } from 'src/users/user.entity';
import { OrganisationEntity } from 'src/organisations/organisation.entity';
import { ApplicationEntity } from 'src/applications/application.entity';

@Entity('block')
export class BlockEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  content: string;

  @Column()
  encryptionItemKey: string;

  @Column({ default: false })
  deleted: boolean;

  @ManyToOne(type => UserEntity)
  owner: UserEntity;

  @ManyToOne(type => ApplicationEntity)
  app: ApplicationEntity;
}
