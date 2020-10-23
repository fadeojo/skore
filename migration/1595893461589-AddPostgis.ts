import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPostgis1595893461589 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS postgis');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP EXTENSION IF NOT EXISTS postgis');
  }
}
