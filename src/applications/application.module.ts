import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationEntity } from './application.entity';
import { ApplicationService } from './application.service';
import { ApplicationController } from './application.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationEntity])],
  providers: [ApplicationService],
  controllers: [ApplicationController],
  exports: [],
})
export class ApplicationModule {}
