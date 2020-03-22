import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganisationEntity } from './organisation.entity';
import { OrganisationService } from './organisation.service';
import { OrganisationController } from './organisation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrganisationEntity])],
  providers: [OrganisationService],
  controllers: [OrganisationController],
  exports: [],
})
export class OrganisationModule {}
