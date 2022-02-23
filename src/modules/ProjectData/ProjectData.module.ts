import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectDataController } from './ProjectData.controller';
import { ProjectData } from './ProjectData.entity';
import { ProjectDataService } from './ProjectData.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectData])],
  providers: [ProjectDataService],
  controllers: [ProjectDataController],
})
export class ProjectDataModule {}
