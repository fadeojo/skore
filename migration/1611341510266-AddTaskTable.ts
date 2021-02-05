
import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTaskTable1611341510266 implements MigrationInterface {
  name = "AddTaskTable1611341510266";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "FK_47e61f36cd78c89e151e3760453"`);
    await queryRunner.query(
      `CREATE TABLE "task" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(`ALTER TABLE "score" ADD "task_id" integer`);
    await queryRunner.query(`ALTER TABLE "score" ALTER COLUMN "profile_id" SET NOT NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "score"."profile_id" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "profile"."location" IS NULL`);
    await queryRunner.query(
      `ALTER TABLE "score" ADD CONSTRAINT "profile_id" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "score" ADD CONSTRAINT "task_id" FOREIGN KEY ("task_id") REFERENCES "task"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "task_id"`);
    await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "profile_id"`);
    await queryRunner.query(`COMMENT ON COLUMN "profile"."location" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "score"."profile_id" IS NULL`);
    await queryRunner.query(`ALTER TABLE "score" ALTER COLUMN "profile_id" DROP NOT NULL`);
    await queryRunner.query(`ALTER TABLE "score" DROP COLUMN "task_id"`);
    await queryRunner.query(`DROP TABLE "task"`);
    await queryRunner.query(
      `ALTER TABLE "score" ADD CONSTRAINT "FK_47e61f36cd78c89e151e3760453" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
