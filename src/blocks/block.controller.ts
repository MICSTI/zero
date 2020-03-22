import { BlockService } from './block.service';
import { Get, Controller, Param, NotFoundException } from '@nestjs/common';
import { BlockEntity } from './block.entity';

@Controller('blocks')
export class BlockController {
  constructor(private readonly blockService: BlockService) {}

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<BlockEntity> {
    const block = this.blockService.findById(id);

    if (!block) {
      throw new NotFoundException('No block with this ID found');
    }

    return block;
  }
}
