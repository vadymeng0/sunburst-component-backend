import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProjectData } from '../ProjectData/ProjectData.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => ProjectData, (projectData) => projectData.project)
  projectDatas: ProjectData[];
}
