import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { OrganisationService } from './organisation.service';
import { OrganisationEntity } from './organisation.entity';

@Controller('organisations')
export class OrganisationController {
  constructor(private readonly organisationService: OrganisationService) {}

  @Get()
  async getAll(): Promise<OrganisationEntity[]> {
    return this.organisationService.findAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<OrganisationEntity> {
    const organisation = this.organisationService.findById(id);

    if (!organisation) {
      throw new NotFoundException('No organisation with this ID found');
    }

    return organisation;
  }
}
