import {MigrationInterface, QueryRunner} from "typeorm";

export class ProfileRemoveIndustryAndBusinessName1604418416897 implements MigrationInterface {
    name = 'ProfileRemoveIndustryAndBusinessName1604418416897'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "business_name"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "industry"`);
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "location" TYPE geometry`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "location" TYPE geometry(GEOMETRY,0)`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "industry" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "business_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "addressId" integer`);
    }

}
