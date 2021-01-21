import { MigrationInterface, QueryRunner } from "typeorm";

export class ScoreModel1610740125572 implements MigrationInterface {
  name = "ScoreModel1610740125572";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "score" ("id" SERIAL NOT NULL, "value" integer NOT NULL, profile_id integer, CONSTRAINT "PK_1770f42c61451103f5514134078" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "score" ADD CONSTRAINT "FK_47e61f36cd78c89e151e3760453" FOREIGN KEY (profile_id) REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "score" DROP CONSTRAINT "FK_47e61f36cd78c89e151e3760453"`
    );
    await queryRunner.query(`DROP TABLE "score"`);
  }
}
