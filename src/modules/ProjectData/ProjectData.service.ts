import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectData } from './ProjectData.entity';

@Injectable()
export class ProjectDataService {
  constructor(
    @InjectRepository(ProjectData)
    private projectDataRepository: Repository<ProjectData>,
  ) {}

  getAllProjectData() {
    return this.projectDataRepository.find();
  }
}
