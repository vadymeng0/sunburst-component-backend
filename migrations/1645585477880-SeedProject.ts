import { MigrationInterface, QueryRunner } from 'typeorm';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import dummyProjects from './projects.dummy.json';

export class SeedProject1645585477880 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const insertQuery = `INSERT INTO public.project (id, name) VALUES ${dummyProjects
      .map((pro) => `('${pro.id}', '${pro.name}')`)
      .join(',')} `;
      console.log(insertQuery);

    await queryRunner.query(insertQuery);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const deleteQuery = `DELETE FROM public.project where project.id in (${dummyProjects
      .map((pro) => pro.id)
      .join(',')})`;
    await queryRunner.query(deleteQuery);
  }
}
