import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { ApplicationEntity } from './application.entity';

@Controller('apps')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Get()
  async getAll(): Promise<ApplicationEntity[]> {
    return this.applicationService.findAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<ApplicationEntity> {
    const app = this.applicationService.findById(id);

    if (!app) {
      throw new NotFoundException('No application with this ID found');
    }

    return app;
  }
}
