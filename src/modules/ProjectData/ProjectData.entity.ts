import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Project } from '../Project/Project.entity';

@Entity()
export class ProjectData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  category: string;

  @Column({ name: 'project_id' })
  projectID: string;

  @Column({ type: 'json' })
  data: Record<string, any>;

  @Column({ type: 'int' })
  rev: number;

  @Column({
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  timeDateStamp;

  @ManyToOne(() => Project, (project) => project.projectDatas)
  @JoinColumn({ name: 'project_id' })
  project?: Project;
}
