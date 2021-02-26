import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNameAndDescriptionToScore1614363919506
  implements MigrationInterface {
  name = "AddNameAndDescriptionToScore1614363919506";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "score" ADD "name" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "score" ADD "description" character varying NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "score" DROP COLUMN "description"`);
    await queryRunner.query(`ALTER TABLE "score" DROP COLUMN "name"`);
  }
}
