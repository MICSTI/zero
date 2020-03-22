import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApplicationEntity } from './application.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(ApplicationEntity)
    private readonly applicationRepository: Repository<ApplicationEntity>,
  ) {}

  async findById(id: string): Promise<ApplicationEntity | undefined> {
    return this.applicationRepository.findOne(id);
  }

  async findAll(): Promise<ApplicationEntity[]> {
    return this.applicationRepository.find();
  }
}
