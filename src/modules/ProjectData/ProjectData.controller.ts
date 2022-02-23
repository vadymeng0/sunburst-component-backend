import { Controller, Get } from '@nestjs/common';
import { ProjectData } from './ProjectData.entity';
import { ProjectDataService } from './ProjectData.service';

@Controller('/project-data')
export class ProjectDataController {
  constructor(private readonly projectDataService: ProjectDataService) {}
  @Get()
  async getProjectData(): Promise<ProjectData[]> {
    return this.projectDataService.getAllProjectData();
  }
}
