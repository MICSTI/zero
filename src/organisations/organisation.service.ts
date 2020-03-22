import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganisationEntity } from './organisation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrganisationService {
  constructor(
    @InjectRepository(OrganisationEntity)
    private readonly organisationRepository: Repository<OrganisationEntity>,
  ) {}

  async findById(id: string): Promise<OrganisationEntity | undefined> {
    return this.organisationRepository.findOne(id);
  }

  async findAll(): Promise<OrganisationEntity[]> {
    return this.organisationRepository.find();
  }
}
