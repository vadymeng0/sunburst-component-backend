import { MigrationInterface, QueryRunner } from 'typeorm';
import dummyProjectData from './project-data.dummy.json';

export class SeedProjectData1645586976858 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const insertQuery = `INSERT INTO public.project_data (project_id, category, data, rev) VALUES ${dummyProjectData
      .map(
        (proData) =>
          `('${proData.project_id}', '${proData.category}','${JSON.stringify(
            proData.data,
          )}'::json, '${proData.rev}' )`,
      )
      .join(',')} `;
    console.log(insertQuery);

    await queryRunner.query(insertQuery);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
