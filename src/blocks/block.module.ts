import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockEntity } from './block.entity';
import { BlockService } from './block.service';
import { BlockController } from './block.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BlockEntity])],
  providers: [BlockService],
  controllers: [BlockController],
  exports: [],
})
export class BlockModule {}
