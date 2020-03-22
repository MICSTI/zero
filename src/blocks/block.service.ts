import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlockEntity } from './block.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlockService {
  constructor(
    @InjectRepository(BlockEntity)
    private readonly blockRepository: Repository<BlockEntity>,
  ) {}

  async findById(id: string): Promise<BlockEntity | undefined> {
    return this.blockRepository.findOne(id);
  }

  async findAllForOwner(id: string): Promise<BlockEntity[]> {
    // TODO query for owner
    return this.blockRepository.find();
  }
}
